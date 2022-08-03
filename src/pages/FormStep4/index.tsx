import * as C from "./styles";
import { Theme } from "../../components/Theme";
import { useNavigate } from "react-router-dom";
import { useForm, FormActions } from "../../contexts/FormContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const FormStep4 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 4,
      });
    }
  }, []);

  const handleNextStep = () => {
    if (state.email !== "" && state.github !== "") {
      alert("Agradecemos pela preferencia! Volte Sempre!");
      console.log(state);
    } else {
      alert("Preencha os dados");
    }
  };

  return (
    <Theme>
      <C.Container>
        <span>Passo 4/4</span>
        <h1>{state.name}, chegamos na ultima etapa!</h1>
        <span>Confirme seus dados abaixo:</span>
        <C.Content>
          <p>
            Seu nome: <span>{state.name}</span>
          </p>
          <p>
            Voce é:
            {state.level === 0 ? (
              <span> Um programador iniciante</span>
            ) : (
              <span> Um programador experiente</span>
            )}
          </p>

          <p>
            Seu Email: <span>{state.email}</span>
          </p>
          <p>
            Seu GitHub: <span>{state.github}</span>
          </p>
        </C.Content>

        <Link to="/step3" className="backButton">
          Voltar
        </Link>
        <button onClick={handleNextStep}>Finalizar Cadastro</button>
      </C.Container>
    </Theme>
  );
};
