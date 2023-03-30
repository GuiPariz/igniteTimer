import { Play } from "phosphor-react";
import { useState } from "react";
import { ContDownButton, DisplayTimer, Form, HomeContainer, Separator, SetTimer, TaskInput, TimerInput } from "./styled";
import {useForm} from 'react-hook-form'
export default function Home() {


  const {register, handleSubmit, watch} = useForm()

  function handleCreateNewCycle (data:any){
    console.log(data)
  }

  const task = watch('task')


  return (
    <HomeContainer>
      <Form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <SetTimer>
          <label htmlFor="project">Vou trabalhar em</label>
          <TaskInput
            type="text"
            id="project"
            placeholder="Dê um nome para seu projeto"
            list="task-suggestions"
            {... register('task')}
          />
          <datalist id="task-suggestions">
            <option value="projeto 1"/>
            <option value="projeto 2"/>
            <option value="projeto 3"/>
            <option value="projeto 4"/>
          </datalist>
          <label htmlFor="timeForProject">Durante</label>
          <TimerInput 
            type="number"
            id="timeForProject" 
            placeholder="00" 
            step={5}
            max={60}
            {...register('timerForProject', {valueAsNumber:true})}
            />
          <span>minutos.</span>
        </SetTimer>

        <DisplayTimer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </DisplayTimer>

        <ContDownButton type="submit" disabled={!task}>
          <Play size={24} />
          Começar
        </ContDownButton>
      </Form>
    </HomeContainer>
  );
}
