import React, {useState} from 'react';
import './IntakeForm.css';

function IntakeForm() {
    const [frequency, setFrequency] = useState(1);

    const [items, setItems] = useState([
        { name: '', value: '', attractiveness: '' }
    ]);

    const addItem = () => {
        console.log("addItem called")
        setItems([...items, { name: '', value: '', attractiveness: '' }]);
    };

    const handleChange = (index, field, value) => {
        const newItems = [...items];
        newItems[index][field] = value;
        setItems(newItems);
    };

    const removeItem = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };

     const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted");
        console.log(e.target.elements.namedItem("name").value);
    }


    return (
        <div className="container">
            <h1 className="mt-4 mb-4">VRKI Intakedocument</h1>
            <form className="my_form" method="post" onSubmit={handleSubmit}>

                <div className="form-group mb-4">
                    <label htmlFor="name">Naam Aanvrager:</label>
                    <input className="form-control" type="text" id="name"
                           name="name"
                           required/>
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="address">Adres:</label>
                    <input className="form-control" type="text" id="address"
                           name="address" required/>
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="zip_code">Postcode:</label>
                    <input className="form-control" type="text" id="zip_code"
                           name="zip_code" required/>
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="city">Plaats:</label>
                    <input className="form-control" type="text" id="city"
                           name="city" required/>
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="email">Email:</label>
                    <input className="form-control" type="email" id="email"
                           name="email" required/>
                </div>

                <div className="btn-group-horizontal" id="requesting_party">
                    <label>Eisende partij:</label>
                    <div>
                        <input className="btn-check form-check-input"
                               type="radio"
                               id="owner" name="requesting_party"
                               value="Bewoner / eigenaar / beheerder"
                               required/>
                        <label className="btn btn-outline-secondary"
                               htmlFor="owner">Bewoner
                            / eigenaar / beheerder
                        </label>
                        <input className="btn-check form-check-input"
                               type="radio"
                               id="insurance" name="requesting_party"
                               value="verzekering"
                               required/>
                        <label className="btn btn-outline-secondary"
                               htmlFor="insurance">Verzekering
                        </label>
                    </div>
                </div>
                <div className="btn-group-horizontal" id="risk_class">
                    <label>Geconstateerde risicoklasse conform VRKI 2.0:</label>
                    <div>
                        <input className="btn-check form-check-input" type="radio"
                               id="class_1" name="risk_class"
                               value="Klasse 1"
                               required/>
                        <label className="test"
                               htmlFor="class_1">Klasse 1</label>
                        <input className="btn-check form-check-input" type="radio"
                               id="class_2" name="risk_class"
                               value="Klasse 2"
                               required/>
                        <label className="btn btn-outline-secondary"
                               htmlFor="class_2">Klasse 2</label>
                        <input className="btn-check form-check-input" type="radio"
                               id="class_3" name="risk_class"
                               value="Klasse 3"
                               required/>
                        <label className="btn btn-outline-secondary"
                               htmlFor="class_3">Klasse 3</label>
                        <input className="btn-check form-check-input" type="radio"
                               id="class_4" name="risk_class"
                               value="Klasse 4"
                               required/>
                        <label className="btn btn-outline-secondary"
                               htmlFor="class_4">Klasse 4</label>
                    </div>
                </div>
                <div className="form-middle">
                    <h4>Geadviseerde combinatie van maatregelen conform geconstateerde
                        risicoklasse VRKI 2.0</h4>
                    <div>
                        <label>Organisatorisch:</label>
                        <input type="radio" id="O1-organizational"
                               name="organizational" value="O1" required/>
                        <label htmlFor="O1-organizational">Option 1</label>
                        <input type="radio" id="O2-organizational"
                               name="organizational" value="O2"/>
                        <label htmlFor="O2-organizational">Option 2</label>
                    </div>

                    <div>
                        <label>Bouwkundig:</label>
                        <input type="radio" id="BK1-constructional"
                               name="constructional" value="BK1" required/>
                        <label htmlFor="BK1-constructional">BK1</label>
                        <input type="radio" id="BK2-constructional"
                               name="constructional" value="BK2"/>
                        <label htmlFor="BK2-constructional">BK2</label>
                        <input type="radio" id="BK3-constructional"
                               name="constructional" value="BK3"/>
                        <label htmlFor="BK3-constructional">BK3</label>
                        <input type="radio" id="BK4-constructional"
                               name="constructional" value="BK4"/>
                        <label htmlFor="BK4-constructional">BK4</label>
                    </div>

                    <div>
                        <label>Compartiment:</label>
                        <input type="radio" id="CO1-compartment" name="compartment"
                               value="CO1" required/>
                        <label htmlFor="CO1-compartment">CO1</label>
                        <input type="radio" id="CO2-compartment" name="compartment"
                               value="CO2"/>
                        <label htmlFor="CO2-compartment">CO2</label>
                        <input type="radio" id="CO3-compartment" name="compartment"
                               value="CO3"/>
                        <label htmlFor="CO3-compartment">CO3</label>
                        <input type="radio" id="CO4-compartment" name="compartment"
                               value="CO4"/>
                        <label htmlFor="CO4-compartment">CO4</label>
                    </div>

                    <div>
                        <label>Meeneem beperkend:</label>
                        <input type="radio" id="ME1-carryaway" name="carryaway"
                               value="ME1" required/>
                        <label htmlFor="ME1-carryaway">ME1</label>
                        <input type="radio" id="ME2-carryaway" name="carryaway"
                               value="ME2"/>
                        <label htmlFor="ME2-carryaway">ME2</label>
                        <input type="radio" id="ME3-carryaway" name="carryaway"
                               value="ME3"/>
                        <label htmlFor="ME3-carryaway">ME3</label>
                        <input type="radio" id="ME4-carryaway" name="carryaway"
                               value="ME4"/>
                        <label htmlFor="ME4-carryaway">ME4</label>
                    </div>

                    <div>
                        <label>Elektronisch:</label>
                        <input type="radio" id="EL1-electronic" name="electronic"
                               value="EL1" required/>
                        <label htmlFor="EL1-electronic">EL1</label>
                        <input type="radio" id="EL2-electronic" name="electronic"
                               value="EL2"/>
                        <label htmlFor="EL2-electronic">EL2</label>
                        <input type="radio" id="EL3-electronic" name="electronic"
                               value="EL3"/>
                        <label htmlFor="EL3-electronic">EL3</label>
                        <input type="radio" id="EL4-electronic" name="electronic"
                               value="EL4"/>
                        <label htmlFor="EL4-electronic">EL4</label>
                    </div>

                    <div>
                        <label>Schildetectie:</label>
                        <input type="radio" id="SD1-shield" name="shield" value="SD1"
                               required/>
                        <label htmlFor="SD1-shield">SD1</label>
                        <input type="radio" id="SD2-shield" name="shield" value="SD2"/>
                        <label htmlFor="SD2-shield">SD2</label>
                        <input type="radio" id="SD3-shield" name="shield" value="SD3"/>
                        <label htmlFor="SD3-shield">SD3</label>
                        <input type="radio" id="SD4-shield" name="shield" value="SD4"/>
                        <label htmlFor="SD4-shield">SD4</label>
                    </div>

                    <div>
                        <label>Alarmtransmissie:</label>
                        <input type="radio" id="AT1-alarm" name="alarm" value="AT1"
                               required/>
                        <label htmlFor="AT1-alarm">AT1</label>
                        <input type="radio" id="AT2-alarm" name="alarm" value="AT2"/>
                        <label htmlFor="AT2-alarm">AT2</label>
                        <input type="radio" id="AT3-alarm" name="alarm" value="AT3"/>
                        <label htmlFor="AT3-alarm">AT3</label>
                        <input type="radio" id="AT4-alarm" name="alarm" value="AT4"/>
                        <label htmlFor="AT4-alarm">AT4</label>
                    </div>

                    <div>
                        <label>Tech. Alarmverificatie:</label>
                        <input type="radio" id="Video-verification" name="verification"
                               value="Video" required/>
                        <label htmlFor="Video-verification">Video</label>
                        <input type="radio" id="Audio-verification" name="verification"
                               value="Audio"/>
                        <label htmlFor="Audio-verification">Audio</label>
                        <input type="radio" id="MultipleZones-verification"
                               name="verification" value="Multiple Zones"/>
                        <label htmlFor="MultipleZones-verification">Meerdere zones</label>
                    </div>

                    <div>
                        <label>Reactie:</label>
                        <input type="radio" id="RE1-reaction" name="reaction"
                               value="RE1" required/>
                        <label htmlFor="RE1-reaction">RE1</label>
                        <input type="radio" id="RE2-reaction" name="reaction"
                               value="RE2"/>
                        <label htmlFor="RE2-reaction">RE2</label>
                        <input type="radio" id="RE3-reaction" name="reaction"
                               value="RE3"/>
                        <label htmlFor="RE3-reaction">RE3</label>
                        <input type="radio" id="RE4-reaction" name="reaction"
                               value="RE4"/>
                        <label htmlFor="RE4-reaction">RE4</label>
                    </div>

                    <div>
                        <label>Maatwerk:</label>
                        <input type="radio" id="NotApplicable-customization"
                               name="customization" value="N.V.T." required/>
                        <label htmlFor="NotApplicable-customization">N.V.T.</label>
                        <input type="radio" id="CustomPlan-customization"
                               name="customization"
                               value="Ja, toelichting in beveiligingsplan"/>
                        <label htmlFor="CustomPlan-customization">Ja, toelichting in
                            beveiligingsplan</label>
                    </div>

                    <div>
                        <label>Partiële beveiliging:</label>
                        <input type="radio" id="No-partial-security"
                               name="partial_security" value="Nee" required/>
                        <label htmlFor="No-partial-security">Nee</label>
                        <input type="radio" id="Yes-partial-security"
                               name="partial_security"
                               value="Ja, toelichting in beveiligingsplan"/>
                        <label htmlFor="Yes-partial-security">Ja, toelichting in
                            beveiligingsplan</label>
                    </div>

                    <div>
                        <label>Onderhoud:</label>
                        <label htmlFor="frequency">keren per jaar</label>
                        <input className="test"
                            type="number"
                            id="frequency"
                            name="frequency"
                            placeholder="?"
                            value={frequency}
                            min="0"
                            onChange={(e) => setFrequency(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="form-group mb-4 form-lower" id="dynamic-inputs">
                    <h4>Attractieve goederen en inventaris (bedrijven)</h4>
                    <label>Voeg items toe:</label>
                    <div className="d-flex mb-2 align-items-center input-row">
                        {items.map((item, index) => (
                            <div key={index} className="d-flex mb-2 align-items-center input-row">
                                <input
                                    type="text"
                                    name={`item_name_${index}`}
                                    className="form-control me-2"
                                    placeholder="Naam/Beschrijving"
                                    value={item.name}
                                    onChange={(e) => handleChange(index, 'name', e.target.value)}
                                    required
                                />
                                <input
                                    type="number"
                                    name={`item_value_${index}`}
                                    className="form-control me-2"
                                    placeholder="Euro's"
                                    min="0"
                                    value={item.value}
                                    onChange={(e) => handleChange(index, 'value', e.target.value)}
                                    required
                                />
                                <select
                                    name={`item_attractiveness_${index}`}
                                    className="form-select me-2"
                                    value={item.attractiveness}
                                    onChange={(e) => handleChange(index, 'attractiveness', e.target.value)}
                                    required
                                >
                                    <option value="" disabled>Attractiviteit</option>
                                    <option value="L">L</option>
                                    <option value="M">M</option>
                                    <option value="H">H</option>
                                    <option value="ZH">ZH</option>
                                </select>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => removeItem(index)}
                                >
                                    Verwijder
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <button type="button" id="add-btn" className="btn btn-secondary mb-4" onClick={addItem}>
                        Voeg item toe
                    </button>
                    <button className="btn btn-secondary mb-4" type="submit">Submit
                    </button>
                </div>

            </form>
        </div>
    );
}

export default IntakeForm;