# Live showcase

You can see a live version of this application here: [https://angular-ivy-qplmet.stackblitz.io](https://angular-ivy-qplmet.stackblitz.io).

The editor view of the live version can be accessed here: [https://stackblitz.com/edit/angular-ivy-qplmet?file=src/app/app.component.ts](https://stackblitz.com/edit/angular-ivy-qplmet?file=src/app/app.component.ts).

# Assignment

I've been given the following assignment by an experienced frontend developer in order to build a showcase for my skills.

## Used techniques

- \*ngIf
- \*ngFor
- Angular CLI
- Comparing JavaScript Date objects
- Components
- Date pipe
- Form validation
- General project structure
- Input/Output
- JavaScript date objects
- NG Bootstrap
- ngClass
- Reactive forms
- Router
- Services
- Slice Pipe
- Twitter bootstrap
- TypeScript interfaces

## Assignment details

**1) The app should have two separate pages: "Overview" and "Add task"**

-> Angular CLI, components

**2) The pages should be reachable with a navbar**

-> General project structure, Router

**3) The "Add task" page should contain a reactive form where one can render a todo task. A todo-task consists of a name and a due date.**

-> Reactive forms, Typescript interfaces

**4) The due date should have to be entered in an input field in a nicely readable format**

-> Javascript Date objects

**5) Optimize the form for UX (hints, disabled buttons, labels)**

-> \*ngIf, form validation, UX best practices

**6) After entering a task one should be automatically forwarded to the "Overview page"**

-> Form validation, Router

**7) The overview page should contain a list of all the tasks, but just their names should be rendered (not the date)**

-> *ngIf, *ngFor

**8) The list should be ordered alphabetically**

-> Typescript sort

**9) All tasks in the list that are already in the past should be highlighted nicely**

-> Comparing Javascript Date objects, [ngClass], Date pipe

**10) When clicking on a list, a "detail view" should open in a different component on the same page. It should render the name of the task as well as the due date.**

-> Input

**11) The detail view should have a three buttons: cancel, delete and “done”. “Cancel” should simple make the detail view disappear, “delete” should delete the task from the list and make the detail view disappear, “done” should mark the task as done in the list.**

-> Output, Service

**13) If there are more than three tasks, just show the first three and a “show more” button**

-> \*ngIf

**14) When clicking the “show more button” all tasks should be rendered and the “show more” button should disappear**

-> \*ngIf

**15) When a task is longer than 150 characters, just show the first 150 characters and there dots after the text “xyz…”.**

-> Slice pipe
