import React, { Component } from 'react'
export default class CurTime extends Component {
    constructor() {
        super()
        var today = new Date(),
        time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        this.state = {
          currentTime: time
        }
      }
    render() {
        return (
            <div>
                {this.state.currentTime}
            </div>
        )
    }
}
