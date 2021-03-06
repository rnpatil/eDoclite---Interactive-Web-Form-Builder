import React, { Component, PropTypes } from 'react';
import ItemTypes from './ItemTypes';
import { DragSource } from 'react-dnd';
import { Glyphicon, ListGroupItem } from 'react-bootstrap';

const boxSource = {
  beginDrag(props) {
    return {
      component: props.component
    };
  }
};

@DragSource(ItemTypes.BOX, boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))

export default class Box extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  };

  render() {
    const { connectDragSource } = this.props;
    const { name } = this.props;

    return (
      connectDragSource(
        <div>
            <ListGroupItem bsStyle="info" font-weight="bold">
              <Glyphicon glyph="pencil" /> {name}
            </ListGroupItem>
        </div>
      )
    );
  }
}
