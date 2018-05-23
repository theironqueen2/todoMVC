import React,{Component} from 'react';

class MainSection extends Component{

    render(){
        console.log(this.props.todos);
        return (
            <ul className="todo-list">
                {this.props.todos.map(function (item, i){
                    return (
                        <li>
                            <div className="view">
                            <label>{item.text}</label>
                            </div>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default MainSection;