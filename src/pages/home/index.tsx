import { Play } from "phosphor-react";
import { DisplayTimer, Form, HomeContainer, Separator, SetTimer } from "./styled";

export default function Home() {
  return (
    <HomeContainer>
      <Form>
        <SetTimer>
          <label htmlFor="project">Vou trabalhar em</label>
          <input
            type="text"
            id="project"
            placeholder="Dê um nome para seu projeto"
          />
          <label htmlFor="timeForProject">Durante</label>
          <input type="number" id="timeForProject" placeholder="00" />
          <span>minutos.</span>
        </SetTimer>

        <DisplayTimer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </DisplayTimer>

        <button type="submit">
          <Play size={24} />
          começar
        </button>
      </Form>
    </HomeContainer>
  );
}
