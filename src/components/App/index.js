import React from "react";
import { Routes, Route } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Home, Register, SignIn } from "../../pages";
import Header from "../Header";

const particlesOptions = {
  fullScreen: false,
  background: {
    color: {
      value: "#000000",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: false,
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: false,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 5,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};
const particlesInit = async (main) => {
  await loadFull(main);
};
const particlesLoaded = (container) => {
  console.log(container);
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      boxes: [],
      user: {
        id: "",
        name: "Guest",
        email: "",
        entries: 0,
        joined: "",
      },
    };
  }

  loadUser = (user) => {
    const { id, name, email, entries, joined } = user;
    this.setState({ input: "", imageUrl: "", boxes: [], user: { id, name, email, entries, joined } });
  };

  increaseEntries = async () => {
    const requestOptions = {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: this.state.user.id,
      }),
    };
    try {
      if (this.state.user.id) {
        const data = await fetch("http://localhost:3000/image", requestOptions);
        const response = await data.json();
        if (response.status !== "not found") {
          this.setState({
            user: {
              ...this.state.user,
              entries: response.entries,
            },
          });
        }
      } else {
        this.setState({
          user: {
            ...this.state.user,
            entries: this.state.user.entries + 1,
          },
        });
      }
    } catch (error) {
      console.log("Error getting entries", error);
    }
  };

  calculateFaceLocation = (data) => {
    const image = document.getElementById("input-image");
    const boxes = [];
    console.log("data", data);
    const { width, height } = image;

    data.regions.map((region) => {
      const { top_row, left_col, bottom_row, right_col } = region.region_info.bounding_box;
      return boxes.push({
        leftCol: left_col * width,
        topRow: top_row * height,
        rightCol: width - right_col * width,
        bottomRow: height - bottom_row * height,
      });
    });
    this.setState({ boxes: boxes });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = async () => {
    if (this.state.input !== "") {
      this.setState({ imageUrl: this.state.input });
      const requestOptions = {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: this.state.input }),
      };
      try {
        const data = await fetch("http://localhost:3000/imageurl", requestOptions);
        const response = await data.json();
        if (response.status === "success") {
          this.calculateFaceLocation(response.data.outputs[0].data);
          this.increaseEntries();
        }
      } catch (error) {
        console.log("Error submitting", error);
      }
    }
  };

  render() {
    return (
      <div className="App">
        <Particles className="Particles" id="tsparticles" options={particlesOptions} init={particlesInit} loaded={particlesLoaded} />
        <Header user={this.state.user} loadUser={this.loadUser} />
        <div className="PushContent"></div>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                user={this.state.user}
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
                boxes={this.state.boxes}
                imageUrl={this.state.imageUrl}
              />
            }
          />
          <Route path="/sign-in" element={<SignIn loadUser={this.loadUser} />} />
          <Route path="/register" element={<Register loadUser={this.loadUser} />} />
        </Routes>
      </div>
    );
  }
}

export default App;
