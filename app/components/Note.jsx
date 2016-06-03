import React from 'react';

export default class Note extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false
        };
    }

    renderNote = () => {
        const onDelete = this.props.onDelete;

        return (
            <div onClick={this.edit}>
                <span className="task">{this.props.task}</span>
                {onDelete? this.renderDelete() : null}
            </div>
        )
    };

    render() {
        if (this.state.editing) {
            return this.renderEdit();
        }
        return this.renderNote();
    }

    renderEdit = () => {
        return <input
            type="text"
            ref={
                element => element ?
                element.selectionStart = this.props.task.length :
                null
            }
            autoFocus={true}
            defaultValue={this.props.task}
            onBlur={this.finishEdit}
            onKeyPress={this.checkEnter}
        />
    };

    // renderNote = () => {
    //     return <div onClick={this.edit}>{this.props.task}</div>
    // };

    edit = () => {
        this.setState({
            editing: true
        });
    };

    checkEnter = (e) => {
        if (e.key == 'enter') {
            this.finishEdit(e);
        }
    };

    finishEdit = (e) => {
        const val = e.target.value;
        if(this.props.onEdit) {
            this.props.onEdit(val);

            // Exit edit mode.
            this.setState({
                editing: false
            });
        }
    };

    renderDelete = () => {
        return <button className="delete-note" onClick={this.props.onDelete}>x</button>
    };
}