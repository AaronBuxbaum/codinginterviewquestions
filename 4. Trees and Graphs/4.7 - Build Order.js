/*
  You are given a list of projects and a list of dependencies
  (which is a list of pairs of projects, where the second project is dependent on the first project).
  All of a project's dependencies must be built before the project is.
  Find a build order that will allow the projects to be built.
  If there is no valid build order, return an error.

  EXAMPLE
  Input:
    projects: a, b, c, d, e, f
    dependencies: (a, d), (f, b), (b, d), (f, a), (d, c)
  Output: f, e, a, b, d, c
 */

import { partition } from "lodash";

class Project {
  dependencies = [];
  dependentOn = 0;

  constructor(value) {
    this.value = value;
  }

  addDependency(value) {
    this.dependencies.push(value);
  }

  getDependencies() {
    return this.dependencies;
  }
}

export const findBuildOrder = (projects, dependencies) => {
  const graph = {};
  let returnValue = [];

  projects.forEach(project => {
    graph[project] = new Project(project);
  });

  dependencies.forEach(([from, to]) => {
    graph[from].addDependency(graph[to]);
    graph[to].dependentOn++;
  });

  while (true) {
    const [dependentProjects, rootProjects] = partition(
      projects,
      vertex => graph[vertex].dependentOn
    );
    projects = dependentProjects;

    if (!rootProjects.length) {
      break;
    }

    rootProjects.forEach(project => {
      returnValue.push(project);
      graph[project].getDependencies().forEach(dependency => {
        dependency.dependentOn--;
      });
    });
  }

  if (projects.length) {
    throw new Error("Cycle detected!");
  }

  return returnValue;
};
