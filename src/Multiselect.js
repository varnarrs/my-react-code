

import './App.css';
import React, { Component } from 'react';

class MultiSelectBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropdown: false,
            inputValue: ''
        };
        this.selectedItems = [];
        this.checked = {};
        this.radioChecked = 'or';
    }

    onCheckBoxClick = (e) => {
        let selVal = e.target.value;
        if (e.target.checked) {
            this.checked[selVal] = true;
            this.selectedItems.push(selVal);
        } else {
            this.checked[selVal] = false;
            const currIndex = this.selectedItems.indexOf(selVal);
            if (currIndex > -1) {
                this.selectedItems.splice(currIndex, 1);
            }
        }
        this.setInputValue();

    }
    setInputValue = () => {
        let selectedItemsVal = '';
        this.selectedItems.map((val) => {
            if (!selectedItemsVal) {
                selectedItemsVal = val;
            } else {
                selectedItemsVal = selectedItemsVal + ' ' + this.radioChecked + ' ' + val;
            }
        });
        this.setState({ inputValue: selectedItemsVal });
        this.props.selectedItems(selectedItemsVal);
    }
    toggleDropdown = () => {
        this.setState({ showDropdown: !this.state.showDropdown });
    }
    closeDropdown = () => {
        this.setState({ showDropdown: false });
    }
    onradioClick = (e) => {
        this.radioChecked = e.target.id;
        this.setInputValue();

    }
    clearSelection = () => {
        this.selectedItems = [];
        this.setState({ inputValue: '' });
        for (let check in this.checked) {
            this.checked[check] = false;
        }
    }


    render() {
        return (
            <div className={'multiSelectContainer'}>
                <div className={'styledSelect'}>
                    <input type="text" className={'inputContainer'} onClick={this.toggleDropdown}
                        placeholder={'Select Toppings'} defaultValue={this.state.inputValue}
                        title={this.state.inputValue} />
                </div>
                <div className={this.state.showDropdown ? 'showDropdown' : 'hideDropdown'}>
                    <ul className={'listStyleType'} >
                        <li className='radioContainer'>
                            <input type="radio"
                                name="selectType"
                                id="or"
                                value="Any"
                                onClick={this.onradioClick}
                                defaultChecked />
                            <label htmlFor="any"><span><span></span></span>{'Any'}</label>
                            <input type="radio"
                                name="selectType"
                                id="and"
                                onClick={this.onradioClick}
                                value="All" />
                            <label htmlFor="all"><span><span></span></span>{'All'}</label>
                        </li>
                        <div className={'liContainer'}>
                            {this.props.selectBoxData.map((val) => {
                                return (<li value={val.value}>
                                    <input type="checkbox"
                                        defaultValue={val.value}
                                        id={'check_' + val.value}
                                        checked={this.checked[val.value]}
                                        onClick={this.onCheckBoxClick} />
                                    <label htmlFor={'check_' + val.value}><span><span></span></span>{val.value}</label>
                                </li>);
                            })}
                        </div>
                        <li>

                            <hr />
                            <div className={'buttonContainer'} onClick={this.clearSelection}> {'X Clear'}</div>


                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default MultiSelectBox;