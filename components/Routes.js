import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const { HomePage } = require('./HomePage');
const { Contact } = require('./Contact');
const { About } = require('./About');
const { Project } = require('./Project');
const { ErrorPage } = require('./ErrorPage');

export class Routes extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects/:project" component={Project} />
          <Route path="/404error" component={ErrorPage} />
          <Redirect to="/404error" />
        </Switch>
      </>
    );
  }
}
