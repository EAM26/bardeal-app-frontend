import React, {useRef, useState} from 'react';
import './AlarmIntakeForm.css';
import Button from "../../../components/Button.jsx";
import RowRadioButtons from "../../../components/RowRadioButtons.jsx";
import FormRow from "../../../components/FormRow.jsx";
import InnerRowRBs from "../../../components/InnerRowRBs.jsx";
import  handleIntakeForm from "../../../utils/postForm.js";

function AlarmIntakeForm() {
    const [formValues, setFormValues] = useState('');
    const formRef = useRef(null);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        // const formData = new FormData(formRef.current);
        // for (let [key, value] of formData.entries()) {
        //     console.log(`${key}: ${value}`);
            const success = await handleIntakeForm(formRef);
            if (success) {
                console.log("Form created and submitted");
            } else {
                console.log("Form submission failed");
            // }
        }
    }


    return (
        <div className="outer-container">
            <form ref={formRef} className="my_form" method="post" onSubmit={handleSubmit}>
                <div id="pdf-content">
                    <div className="data-risk-object">
                        <h2>Gegevens-risico-object</h2>
                        <div className="ro-items">
                            <div className="ro-item"><label htmlFor="rel-nr-ro">Relatienummer</label>
                                <input id="rel-nr-ro" type="text"/></div>
                            <div className="ro-item"><label htmlFor="name-ro">Naam</label>
                                <input id="name-ro" type="text"/></div>
                            <div className="ro-item"><label htmlFor="address-ro">Adres</label>
                                <input id="address-ro" type="text"/></div>
                            <div className="ro-item"><label htmlFor="pstl-place-ro">Postcode/Plaats</label>
                                <input id="pstl-place-ro" type="text"/></div>
                            <div className="ro-item"><label htmlFor="phone-ro">Telefoonnummer</label>
                                <input id="phone-ro" type="text"/></div>
                            <div className="ro-item"><label htmlFor="email-ro">Email</label>
                                <input id="email-ro" type="email"/></div>
                        </div>
                    </div>
                    <div>
                        <FormRow
                            showLabel={true}
                            name="Organisatorisch"
                            className="blue"
                        >
                            <InnerRowRBs
                                type="radio"
                                split={false}
                                selected={formValues["Organisatorisch"] || ''}
                                handleChange={handleChange}
                                options={['O1', 'O2']}
                            />
                        </FormRow>
                        <FormRow
                        showLabel={true}
                        name="Bedrijven">
                            <InnerRowRBs
                                type="radio"
                                split={false}
                                selected={formValues["Bedrijven"] || ''}
                                handleChange={handleChange}
                                options={['Laag', 'Midden', 'Hoog', 'Zeer Hoog']}
                            />
                        </FormRow>
                    </div>
                    <div>
                        <h5>Geconstateerde risicoklasse conform VRKI 2.0</h5>
                        <RowRadioButtons
                            showLabel={false}
                            className="risk-class"
                            type="radio"
                            name="Risico klasse"
                            selected={formValues["Risico klasse"] || ''}
                            handleChange={handleChange}
                            options={['Klasse 1', 'Klasse 2', 'Klasse 3', 'Klasse 4']}/>
                    </div>
                    <div>
                        <h5>Geadviseerde combinatie van maatregelen conform geconstateerde risicoklasse VRKI 2.0 </h5>
                        <RowRadioButtons
                            split={true}
                            className="measure-items"
                            type="radio"
                            name="Organisatorisch"
                            selected={formValues["Organisatorisch"] || ''}
                            handleChange={handleChange}
                            options={['O1', 'O2']}/>
                        <RowRadioButtons
                            className="measure-items"
                            type="radio"
                            name="Bouwkundig"
                            selected={formValues["Compartiment"] || ''}
                            handleChange={handleChange}
                            options={['BK1', 'BK2', 'BK3', 'BK4']}/>
                        <RowRadioButtons
                            className="measure-items"
                            type="radio"
                            name="Compartiment"
                            selected={formValues["Compartiment"] || ''}
                            handleChange={handleChange}
                            options={['CO1', 'CO2', 'CO3', 'CO4']}
                        />

                        <RowRadioButtons
                            className="measure-items"
                            type="radio"
                            name="Meeneem beperkend"
                            selected={formValues["Meeneem beperkend"] || ''}
                            handleChange={handleChange}
                            options={['ME1', 'ME2', 'ME3', 'ME4']}
                        />

                        <RowRadioButtons
                            className="measure-items"
                            type="radio"
                            name="Elektronisch"
                            selected={formValues["Elektronisch"] || ''}
                            handleChange={handleChange}
                            options={['EL1', 'EL2', 'EL3', 'EL4']}
                        />

                        <RowRadioButtons
                            className="measure-items"
                            type="radio"
                            name="Schildetectie"
                            selected={formValues["Schildetectie"] || ''}
                            handleChange={handleChange}
                            options={['SD1', 'SD2', 'SD3', 'SD4']}
                        />

                        <RowRadioButtons
                            className="measure-items"
                            type="radio"
                            name="Alarmtransmissie"
                            selected={formValues["Alarmtransmissie"] || ''}
                            handleChange={handleChange}
                            options={['AT1', 'AT2', 'AT3', 'AT4']}
                        />

                        <RowRadioButtons
                            className="measure-items"
                            type="radio"
                            name="Tech. Alarmverificatie"
                            selected={formValues["Tech. Alarmverificatie"] || ''}
                            handleChange={handleChange}
                            options={['Video', 'Audio', 'Meerdere zones']}
                        />

                        <RowRadioButtons
                            className="measure-items"
                            type="radio"
                            name="Reactie"
                            selected={formValues["Reactie"] || ''}
                            handleChange={handleChange}
                            options={['RE1', 'RE2', 'RE3', 'RE4']}
                        />

                        <RowRadioButtons
                            className="measure-items"
                            type="radio"
                            name="Maatwerk"
                            selected={formValues["Maatwerk"] || ''}
                            handleChange={handleChange}
                            options={['N.V.T.', 'Ja, toelichting in beveiligingsplan']}
                        />

                        <RowRadioButtons
                            className="measure-items"
                            type="radio"
                            name="Partiële beveiliging"
                            selected={formValues["Partiële beveiliging"] || ''}
                            handleChange={handleChange}
                            options={['Nee', 'Ja, toelichting in beveiligingsplan']}
                        /></div>
                </div>


                <Button type="submit">Submit</Button>
            </form>
        </div>
    );

}

export default AlarmIntakeForm;