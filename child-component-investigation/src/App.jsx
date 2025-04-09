import './App.css'
import Highlighter from './Highlighter'
import RoundedDiv from './RoundedDiv'
import SortedTable from './SortedTable'
import Tooltip from './Tooltip'
import Wrapper from './Wrapper'

function App() {

  return (
    <>
      <SortedTable>
        <table>
          <thead>
            <tr>
              <th>id</th><th>name</th><th>score</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Zoe</td><td>77</td></tr>
            <tr><td>2</td><td>Alice</td><td>99</td></tr>
            <tr><td>3</td><td>John</td><td>92</td></tr>
            <tr><td>4</td><td>Marina</td><td>59</td></tr>
          </tbody>
        </table>
      </SortedTable>
    </>
  )
}

export default App
