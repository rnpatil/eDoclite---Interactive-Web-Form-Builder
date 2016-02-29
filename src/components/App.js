import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import { Panel, PageHeader } from 'react-bootstrap';

/**
 * this function creates UI components on landing page.
 */
const App = () => (
  <div className="container">
    <PageHeader>
      eDocLite   <small>Simple TODO Application</small>
    </PageHeader>
  <Panel header="Todo Box" bsStyle="info">
    <AddTodo todo_text=""/>
    <VisibleTodoList />
    <Footer />
  </Panel>
  </div>
)

export default App;
