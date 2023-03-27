import { HistoryContainer, HistoryList, Status } from "./styles";

export default function History() {
  return (
    <HistoryContainer>
      <h1>Meu histrico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>tarefa</th>
              <th>duração</th>
              <th>início</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>conserto de debitos tecnicos</td>
              <td> 25minutos</td>
              <td>há cerca de 2 meses</td>
              <td> <Status statuscolor="yellow">Em andamento</Status></td>
            </tr>
            <tr>
              <td>conserto de debitos tecnicos</td>
              <td> 25minutos</td>
              <td>há cerca de 2 meses</td>
              <td> <Status statuscolor="red">Interrompido</Status></td>
            </tr>
            <tr>
              <td>conserto de debitos tecnicos</td>
              <td> 25minutos</td>
              <td>há cerca de 2 meses</td>
              <td> <Status statuscolor="green">Concluído</Status></td>
            </tr>
            <tr>
              <td>conserto de debitos tecnicos</td>
              <td> 25minutos</td>
              <td>há cerca de 2 meses</td>
              <td> <Status statuscolor="green">Concluído</Status></td>
            </tr>
            <tr>
              <td>conserto de debitos tecnicos</td>
              <td> 25minutos</td>
              <td>há cerca de 2 meses</td>
              <td> <Status statuscolor="green">Concluído</Status></td>
            </tr>
            <tr>
              <td>conserto de debitos tecnicos</td>
              <td> 25minutos</td>
              <td>há cerca de 2 meses</td>
              <td> <Status statuscolor="green">Concluído</Status></td>
            </tr>
            <tr>
              <td>conserto de debitos tecnicos</td>
              <td> 25minutos</td>
              <td>há cerca de 2 meses</td>
              <td> <Status statuscolor="green">Concluído</Status></td>
            </tr>
            <tr>
              <td>conserto de debitos tecnicos</td>
              <td> 25minutos</td>
              <td>há cerca de 2 meses</td>
              <td> <Status statuscolor="green">Concluído</Status></td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
