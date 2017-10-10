// Dependencies
import { h, Component } from "preact";

// Material Components
import Drawer from "preact-material-components/Drawer";
import Button from "preact-material-components/Button";
import List from "preact-material-components/List";

// Components
import ComponentTable from "../../components/component-table";
import CodeBlock from "../../components/code-block";
import EventsTable from "../../components/events-table";

// Styles
import "./style";

// Samples
import sample from "./sample.txt";

// Class
export default class DrawerPage extends Component {
  constructor() {
    super();
    this.propsTable = [
      {
        component: "Drawer.TemporaryDrawer",
        props: []
      },
      {
        component: "Drawer.TemporaryDrawerHeader",
        props: []
      },
      {
        component: "Drawer.TemporaryDrawerContent",
        props: []
      },
      {
        component: "Drawer.DrawerItem",
        props: [
          {
            name: "selected",
            description: "Tells if the drawer item is selected."
          }
        ]
      },
      {
        component: "Drawer.PermanentDrawer",
        props: [
          {
            name: "spacer",
            description:
              "Teels if the tollbar height equivalent spacer is required."
          }
        ]
      }
    ];
    this.eventsTable = [
      {
        name: "onOpen",
        description: "Fired when the drawer is opened."
      },
      {
        name: "onClose",
        description: "Fired when the drawer is closed."
      }
    ];
  }
  render() {
    return (
      <div>
        <ComponentTable data={this.propsTable} />
        <EventsTable data={this.eventsTable} />

        <div className="mdc-typography--display1">Sample code </div>
        <CodeBlock>
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <div className="mdc-typography--display1">Original documentation</div>
        <div className="mdc-typography--body">
          This component encapsulates <span className="strong">
            mdc-drawer
          </span>, you can refer to its documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-drawer">
            {" "}
            here
          </a>.
        </div>

        <div className="mdc-typography--display1">Demo </div>
        <Button
          primary={true}
          raised={true}
          onClick={() => {
            this.drawer.MDComponent.open = !this.drawer.MDComponent.open;
          }}
        >
          Toggle Drawer
        </Button>
        <div className="demo-drawer">
          <Drawer.TemporaryDrawer
            ref={drawer => {
              this.drawer = drawer;
            }}
          >
            <Drawer.TemporaryDrawerHeader className="mdc-theme--primary-bg">
              Components
            </Drawer.TemporaryDrawerHeader>
            <Drawer.TemporaryDrawerContent>
              <List>
                <List.LinkItem>
                  <List.ItemIcon>home</List.ItemIcon>
                  Home
                </List.LinkItem>
              </List>
            </Drawer.TemporaryDrawerContent>
          </Drawer.TemporaryDrawer>
        </div>
      </div>
    );
  }
}