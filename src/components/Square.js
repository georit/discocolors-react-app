import React from 'react';
import './Square.css';

export default function Square(props) {
  const styles = { backgroundColor: props.color };

  return <div className="Square" style={styles}></div>;
}
