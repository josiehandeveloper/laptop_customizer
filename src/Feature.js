import React, { Component } from "react";
import FeatureOption from "./FeatureOption";
import { FEATURES } from "./Store";

class Feature extends Component {
  render() {
    const options = this.props.options.map((item, index) => {
      const selectedClass =
        item.name === this.props.selected[this.props.name].name
          ? "feature__selected"
          : "";
      const featureClass = "feature__option " + selectedClass;
      return (
        <FeatureOption
          featureClass={featureClass}
          key={index}
          onSelect={this.props.onSelect}
          item={item}
          featureName={FEATURES.name}
        />
      );
    });

    return (
      <div className="feature" key={FEATURES.name}>
        <div className="feature__name">{this.props.name}</div>
        <ul className="feature__list">{options}</ul>
      </div>
    );
  }
}

export default Feature;
