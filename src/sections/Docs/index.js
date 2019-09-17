import React from "react"

import Layout from "../../components/Layout"
import docStyles from "./index.module.scss"

const Docs = () => (
  <Layout id="documentation">
    <h2 style={{ textAlign: "center" }}>How to Use?</h2>
    <h4>Requirements</h4>
    <p>Node.js</p>
    <h4>Installation</h4>
    <pre>
      <code>npm i -g tracli-terminal</code>
    </pre>
    <h4>Usage</h4>
    <p>Firstly create a project named "Todo"</p>

    <pre>
      <code>tracli create "Todo Project"</code>
    </pre>
    <p>Let's list all projects</p>

    <pre>
      <p>tracli list</p>
      <p>Projects</p>
      <p>-------------</p>
      <p>1 - Todo Project | Sat Sep 14 2019 19:00:00</p>
    </pre>
    <p>Now we can add a task to project #1</p>

    <pre>
      <code>tracli create "Do Something" -p=1</code>
    </pre>
    <p>Let's list all tasks of project #1</p>

    <pre>
      <p>tracli list -p=1</p>
      <p>Tasks</p>
      <p>-------------</p>
      <p>1 - Do Something | Sat Sep 14 2019 19:00:10</p>
    </pre>

    <p>Now start a timer for task #1</p>

    <pre>
      <code>tracli start 1</code>
    </pre>
    <p>We can see active timers with status command</p>

    <pre>
      <p>tracli status</p>
      <p>Task: 1 | Do Something</p>
      <p>Last activity: START on Sat Sep 14 2019 19:00:15</p>
    </pre>

    <p>Finally list all time data by project</p>

    <pre>
      <code>tracli report</code>
    </pre>
    <p>Output</p>
    <pre>
      <p>1 | Todo Project</p>
      <code>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Task</th>
              <th>Created on</th>
              <th>Total Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Do Something</td>
              <td>Sep 14 2019</td>
              <td>00:11:42</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>00:11:42</td>
            </tr>
          </tbody>
        </table>
      </code>
    </pre>

    <h4>Cheatsheet</h4>
    <div className={docStyles.cheatsheet}>
      <table>
        <thead>
          <tr>
            <th>Command</th>
            <th>Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>status</td>
            <td>tracli status</td>
          </tr>
          <tr>
            <td>list</td>
            <td>
              tracli list for projects or tracli list{" "}
              <strong>-p=[project_id]</strong> for tasks
            </td>
          </tr>
          <tr>
            <td>create</td>
            <td>
              tracli create 'Project Name' or tracli create 'Task Name'{" "}
              <strong>-p=[project_id]</strong>
            </td>
          </tr>
          <tr>
            <td>delete</td>
            <td>
              tracli delete <strong>-p/-t/-e=[item_id]</strong>. p for projects,
              t for tasks, e for time entries
            </td>
          </tr>
          <tr>
            <td>start</td>
            <td>
              tracli start <strong>[task_id]</strong>
            </td>
          </tr>
          <tr>
            <td>pause</td>
            <td>
              tracli pause <strong>[task_id]</strong>
            </td>
          </tr>
          <tr>
            <td>finish</td>
            <td>
              tracli finish <strong>[task_id]</strong>
            </td>
          </tr>
          <tr>
            <td>report</td>
            <td>tracli report</td>
          </tr>
          <tr>
            <td>help</td>
            <td>tracli help or just tracli</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Layout>
)

export default Docs
