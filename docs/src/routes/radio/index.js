// Dependencies
import {h, Component} from 'preact';

// Material Components
import Radio from '../../../../esm/Radio';
import Formfield from '../../../../esm/FormField';

import '../../../../Radio/style.css';
import '../../../../FormField/style.css';

// Components
import ComponentTable from '../../components/component-table';
import CodeBlock from '../../components/code-block';
import SampleCodeBlock from '../../components/sample-code-block';
import OrgDoc from '../../components/original-documentation';

// Samples
import sample from './sample.txt';
import basicExample from './basic-example.txt';
import disabledExample from './disabled-example.txt';
import controlledExample from './controlled-example.txt';
import advancedControlledExample from './advanced-controlled-example.txt';

// Class
export default class RadioPage extends Component {
  constructor() {
    super();
    this.propsTable = [
      {
        component: 'Radio',
        props: [
          {
            name: 'checked',
            description: 'This makes the Radio button checked.'
          },
          {
            name: 'disabled',
            description: 'This makes the Radio button disabled.'
          }
        ]
      }
    ];
  }
  render() {
    return (
      <div>
        <ComponentTable data={this.propsTable} />
        <SampleCodeBlock>{sample}</SampleCodeBlock>
        <OrgDoc link="input-controls/radio-buttons">mdc-radio</OrgDoc>
        <div className="mdc-typography--display1">Demo </div>
        <div className="mdc-typography--title">Basic radio group</div>
        <div>
          <Formfield>
            <Radio id="radio-1" name="Basic Options" />
            <label for="radio-1">Radio 1</label>
          </Formfield>
          <Formfield>
            <Radio id="radio-2" name="Basic Options" />
            <label for="radio-2">Radio 2</label>
          </Formfield>
          <Formfield>
            <Radio id="radio-3" name="Basic Options" />
            <label for="radio-3">Radio 3</label>
          </Formfield>
        </div>
        <CodeBlock>
          <code class="lang-html">{basicExample}</code>
        </CodeBlock>
        <div className="mdc-typography--title">
          Radio group with disabled option
        </div>
        <div>
          <Formfield>
            <Radio disabled={true} id="radio-1" name="Disabled Options" />
            <label for="radio-1">Disabled</label>
          </Formfield>
          <Formfield>
            <Radio id="radio-2" name="Disabled Options" />
            <label for="radio-2">Radio 2</label>
          </Formfield>
          <Formfield>
            <Radio id="radio-3" name="Disabled Options" />
            <label for="radio-3">Radio 3</label>
          </Formfield>
        </div>
        <CodeBlock>
          <code class="lang-html">{disabledExample}</code>
        </CodeBlock>
        <div className="mdc-typography--title">Controlled radio group</div>
        <div>
          <Formfield>
            <Radio id="radio-1" name="Controlled Options" />
            <label for="radio-1">Radio 1</label>
          </Formfield>
          <Formfield>
            <Radio checked={true} id="radio-2" name="Controlled Options" />
            <label for="radio-2">Radio 2</label>
          </Formfield>
          <Formfield>
            <Radio id="radio-3" name="Controlled Options" />
            <label for="radio-3">Radio 3</label>
          </Formfield>
        </div>
        <CodeBlock>
          <code class="lang-html">{controlledExample}</code>
        </CodeBlock>
        <div className="mdc-typography--title">
          Advanced controlled radio group
        </div>
        This is a possible example of controlling the values of a group of radio
        buttons in component state.
        <CodeBlock>
          <code class="lang-js">{advancedControlledExample}</code>
        </CodeBlock>
      </div>
    );
  }
}
