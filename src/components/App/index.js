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
        enable: true,
        mode: "push",
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
      repulse: {
        distance: 200,
        duration: 0.4,
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
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 4,
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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      boxes: [],
    };
  }
  particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  particlesLoaded = (container) => {
    console.log(container);
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
      const requestOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Key ${process.env.REACT_APP_CLARIFAI_PERSONAL_TOKEN}`,
        },
        body: JSON.stringify({
          user_app_id: {
            user_id: process.env.REACT_APP_CLARIFAI_USER_ID,
            app_id: process.env.REACT_APP_CLARIFAI_APP_ID,
          },
          inputs: [
            {
              data: {
                image: {
                  url: this.state.input,
                },
              },
            },
          ],
        }),
      };
      const data = await fetch(
        `https://api.clarifai.com/v2/models/${process.env.REACT_APP_CLARIFAI_MODEL_ID}/versions/${process.env.REACT_APP_CLARIFAI_VERSION_ID}/outputs`,
        requestOptions
      );
      const response = await data.json();
      if (response.status.code !== 10000) {
        console.log("No image detected at URL");
      } else {
        this.setState({ imageUrl: this.state.input });
        this.calculateFaceLocation(response.outputs[0].data);
      }
    }
  };

  render() {
    return (
      <div className="App">
        <Particles className="Particles" id="tsparticles" options={particlesOptions} />
        <Header />
        <div className="PushContent"></div>
        <Routes>
          <Route
            path="/"
            element={
              <Home onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} boxes={this.state.boxes} imageUrl={this.state.imageUrl} />
            }
          />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    );
  }
}

export default App;
