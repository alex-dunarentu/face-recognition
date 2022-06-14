import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Register, SignIn, Detect, Profile, Rankings } from "../../pages";
import Header from "../Header";
import Background from "../Background";
import Footer from "../Footer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      errorMsg: "",
      input: "",
      imageUrl: "",
      boxes: [],
      user: {
        id: "",
        name: "visitor",
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
        const data = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/image`, requestOptions);
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
    if (Object.keys(data).length === 0) {
      this.setState({ errorMsg: "No face detected." });
      return;
    }
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
    this.increaseEntries();
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  isValidHttpUrl(string) {
    let url;
    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  }

  onButtonSubmit = async () => {
    if (this.state.errorMsg) {
      this.setState({ errorMsg: "" });
    }
    if (this.state.imageUrl) {
      this.setState({ imageUrl: "", boxes: [] });
    }
    if (this.isValidHttpUrl(this.state.input) && !this.state.isLoading) {
      this.setState({ imageUrl: this.state.input, boxes: [] });
      const requestOptions = {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: this.state.input }),
      };
      try {
        this.setState({ isLoading: true });
        const data = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/imageurl`, requestOptions);
        const response = await data.json();
        if (response.status === "success") {
          this.setState({ isLoading: false, errorMsg: "" });
          this.calculateFaceLocation(response.data.outputs[0].data);
        }
      } catch (error) {
        this.setState({ isLoading: false, errorMsg: "Error submitting." });
        console.log("Error submitting", error);
      }
    } else {
      this.setState({ isLoading: false, errorMsg: "Not a valid HTTP URL." });
    }
  };

  render() {
    return (
      <div className="App">
        <Background />
        <Header user={this.state.user} loadUser={this.loadUser} />
        <div className="PushContent"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/detect"
            element={
              <Detect
                user={this.state.user}
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
                isLoading={this.state.isLoading}
                errorMsg={this.state.errorMsg}
                boxes={this.state.boxes}
                imageUrl={this.state.imageUrl}
              />
            }
          />
          <Route path="/rankings" element={<Rankings />} />
          <Route path="/sign-in" element={<SignIn loadUser={this.loadUser} />} />
          <Route path="/register" element={<Register loadUser={this.loadUser} />} />
          <Route path="/profile/:id" element={<Profile user={this.state.user} />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
