import React from 'react';

class AutoSuggest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            suggestion: []
        }

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.setValue = this.setValue.bind(this);
    }

    setValue(value) {
        this.input.value = value.name;
        this.props.setSelectedValue(value);
        this.toggleDropdown();
    }

    toggleDropdown() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const { name, placeholder, suggestion } = this.props;

        return (
            <div className='auto-complete-wrapper'>
                <input type="text" name={name} ref={(input) => this.input = input} placeholder={placeholder} onFocus={this.toggleDropdown} required />
                { this.state.isOpen &&
                    <div className='auto-complete-suggestion'>
                        <ul>
                            { suggestion.map((item, key) => 
                                <li key={key} onClick={(e) => {this.setValue(item)}}>
                                    <p>
                                        <span className='name'>{item.name}</span>
                                        <span className='code'>{item.code}</span>
                                    </p>
                                </li> )
                            }
                        </ul>
                    </div>
                }
            </div>
        );
    }
}

export default AutoSuggest;