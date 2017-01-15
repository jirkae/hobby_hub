import React, { Component } from 'react';

export default class EventComments extends Component {
    render() {
        return (
            <div>
                <h4 className="text-uppercase">Komentáře</h4>
                <div className="form-group">
                    <textarea className="form-control"></textarea>
                    <button className="btn btn-xs btn-success">Přidat komentář</button>
                </div>
                <div class="media"> 
                    <div class="media-body"> 
                        <h4 class="media-heading">Media heading</h4> 
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. 
                    </div> 
                </div>
            </div>
        );
    }
}