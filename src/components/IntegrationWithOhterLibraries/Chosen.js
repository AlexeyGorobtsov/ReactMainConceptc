import React from 'react';
import $ from 'jquery';
import '../../../node_modules/chosen-js/chosen.css'
window.jQuery = $;
require('chosen-js');

export class Chosen extends React.Component {

    componentDidMount() {
        this.$el = $(this.el);
        this.$el.chosen();

        this.handleChange = this.handleChange.bind(this);
        this.$el.on('change', this.handleChange)
    }

    componentDidUpdate(prevProvs) {
        if (prevProvs.children !== this.props.children) {
            this.$el.trigger('chosen:update');
        }
    }

    componentWillUnmount() {
        this.$el.off('change', this.handleChange);
        this.$el.chosen('destroy')
    }

    handleChange(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        return (
            <div>
                <select
                    className={'Chosen-select'}
                    ref={el => this.el = el}
                >
                    {this.props.children}
                </select>
            </div>
        )
    }
}


