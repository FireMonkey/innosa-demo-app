import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';


class Category extends React.Component {

  constructor(props) {
    super(props);
    this.state = {  
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://services.odata.org/V3/Northwind/Northwind.svc/Categories?$format=json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            items: result.value
          });
          console.log('result.value:', result.value);
        },
        (error) => {
          console.log('error:',error);
        }
      )
  }

  render() {
    return (
      <Container>
        <Table responsive>
          <thead>
            <tr>
              <th>Kategori Adı</th>
              <th>Açıklama</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map(item => (
              <tr key={item.CategoryID}>
                <td>{item.CategoryName}</td>
                <td>{item.Description}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* <table>
          <thead>
            <tr>
              <th>Kategori Adı</th>
              <th>Açıklama</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map(item => (
              <tr key={item.CategoryID}>
                <td>{item.CategoryName}</td>
                <td>{item.Description}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </Container>
    );
  }
}

export default Category;
