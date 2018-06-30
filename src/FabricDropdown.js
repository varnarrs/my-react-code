import React, { Component } from 'react';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { Dropdown, DropdownMenuItemType } from 'office-ui-fabric-react/lib/Dropdown';
import { ChoiceGroup } from 'office-ui-fabric-react';
import { Icon } from 'office-ui-fabric-react/lib/Icon';


class FabricDropdown extends Component {

    constructor() {
        super();
        this.state = {
            selectedItems: []
        };
    }

    copyArray = (array) => {
        const newArray = [];
        for (let i = 0; i < array.length; i++) {
            newArray[i] = array[i];
        }
        return newArray;
    }

    onChangeMultiSelect = (item) => {
        const updatedSelectedItem = this.state.selectedItems ? this.copyArray(this.state.selectedItems) : [];
        if (item.selected) {
            // add the option if it's checked
            updatedSelectedItem.push(item.key);
        } else {
            // remove the option if it's unchecked
            const currIndex = updatedSelectedItem.indexOf(item.key);
            if (currIndex > -1) {
                updatedSelectedItem.splice(currIndex, 1);
            }
        }
        this.setState({
            selectedItems: updatedSelectedItem
        });
    }

    onRenderOption = (option) => {
        return (
            <div className="dropdownExample-option">
                {(option.key === 'radio') ?
                    <div>
                        <ChoiceGroup
                            defaultSelectedKey="Any"
                            aria-hidden="true"
                            options={[
                                {
                                    key: 'Any',
                                    text: 'Any'
                                },
                                {
                                    key: 'All',
                                    text: 'All'
                                }
                            ]}
                            required={true}
                            onChange={this.onChange}
                        /></div> :
                    <span>{option.text}</span>}

            </div>
        );
    }
    onChange = (option) => {
        console.log(option);
    }


    render() {
        return (

            <Fabric>
                <Dropdown
                    placeHolder="Select options"
                    selectedKeys={this.state.selectedItems}
                    onChanged={this.onChangeMultiSelect}
                    onRenderOption={this.onRenderOption}
                    multiSelect
                    options={[
                        {
                            key: 'radio'
                        },
                        {
                            key: 'corn',
                            value: 'Corn',
                            text: 'Corn'
                        },
                        {
                            key: 'capsicum',
                            value: 'Capsicum',
                            text: 'Capsicum'
                        },
                        {
                            key: 'onion',
                            value: 'Onions',
                            text: 'Onions'
                        },
                        {
                            key: 'paneer',
                            value: 'Paneer',
                            text: 'Paneer'
                        }
                    ]}
                />
            </Fabric>
        );
    }
}

export default FabricDropdown;
