import React, {useState} from 'react';
import FormRow from "../../../components/formrow/FormRow.jsx";
import Button from "../../../components/button/Button.jsx";
import InnerRowRBs from "../../../components/innerRowRBs/InnerRowRBs.jsx";
import './AlarmIntakeForm.css'
import handleIntakeForm from "../../../utils/postForm.js";
import {
    ORGANIZATION_ADDRESS,
    ORGANIZATION_EMAIL,
    ORGANIZATION_NAME,
    ORGANIZATION_PHONE,
    ORGANIZATIONZIPCODE_PLACE
} from "../../../companyConfig.js";

function AlarmIntakeForm() {
    const [formData, setFormData] = useState({
        version: '',
        date: '',
        projectNumber: '',
        clientName: '',
        address: '',
        zipcode_place: '',
        phone: '',
        email: '',
        employee: '',
        vebQualityMark: false,
        borgCertification: '',
        designatedObject: '',
        customDesignatedObject: '',
        requestingParty: '',
        customRequestingParty: '',
        housesValue: '',
        companiesValue: '',
        riskClass: '',
        organisational: '',
        construction: '',
        compartment: '',
        theftProtection: '',
        electronic: '',
        shieldingDetection: '',
        alarmTransmission: '',
        verificationTech: '',
        response: '',
        customization: '',
        partialProtection: '',
        maintenance: false,
        maintenanceFrequency: 0,
        proposal: '',
        customProposal: '',
        housesValueAttractiveness: [{name: '', value: ''}],
        companiesValueAttractiveness: [{name: '', value: ''}],

    });


    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData(prev => {
            const updated = {...prev, [name]: value};

            if (name === 'designatedObject' && value !== 'Anders, namelijk:') {
                updated.customDesignatedObject = '';
            }

            if (name === 'requestingParty' && value !== 'Anders, namelijk:') {
                updated.customRequestingParty = '';
            }

            if (name === 'proposal' && value !== 'Afwijkende beveiligingsmaatregelen t.o.v VRKI 2.0, namelijk:') {
                updated.customProposal = '';
            }

            return updated;
        });
    };

    const handleHouseAttractivenessChange = (index, key, value) => {
        setFormData(prev => {
            const updatedList = [...prev.housesValueAttractiveness];
            updatedList[index][key] = value;
            return {...prev, housesValueAttractiveness: updatedList};
        });
    };

    const handleCompanyAttractivenessChange = (index, key, value) => {
        setFormData(prev => {
            const updatedList = [...prev.companiesValueAttractiveness];
            updatedList[index][key] = value;
            return {...prev, companiesValueAttractiveness: updatedList};
        });
    };

    const addHouseAttractivenessRow = () => {
        setFormData(prev => ({
            ...prev,
            housesValueAttractiveness: [...prev.housesValueAttractiveness, {name: '', value: ''}],
        }));
    };
    const addCompanyAttractivenessRow = () => {
        setFormData(prev => ({
            ...prev,
            companiesValueAttractiveness: [...prev.companiesValueAttractiveness, {name: '', value: ''}],
        }));
    };

    const removeHouseAttractivenessRow = (index) => {
        setFormData(prev => {
            const updatedList = prev.housesValueAttractiveness.filter((_, i) => i !== index);
            return {...prev, housesValueAttractiveness: updatedList};
        });
    };

    const removeCompanyAttractivenessRow = (index) => {
        setFormData(prev => {
            const updatedList = prev.companiesValueAttractiveness.filter((_, i) => i !== index);
            return {...prev, companiesValueAttractiveness: updatedList};
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        console.log(formData);
        const success = await handleIntakeForm(formData, form);
        if (success) {
            console.log("Form created and submitted");
        } else {
            console.log("Form submission failed");
        }

    }

    return (
        <div className="outer_container">
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>VRKI Intakedocument</h2>
                    <h5>Adviesdocument ter inventarisatie van de risicoklasse, bijbehorende beveiligingsmaatregelen en
                        wensen van de aanvrager</h5>
                    <div><label htmlFor="version">
                        VRKI 2.0 versie:
                        <input
                            id="version"
                            name="version"
                            type="text"
                            value={formData.version}
                            onChange={handleChange}
                        />
                    </label>
                        <label htmlFor="date">
                            Datum:
                            <input
                                id="date"
                                name="date"
                                type="date"
                                value={formData.date}
                                onChange={handleChange}
                            />
                        </label>
                        <label htmlFor="projectNumber">
                            Projectnummer:
                            <input
                                id="projectNumber"
                                name="projectNumber"
                                type="text"
                                value={formData.projectNumber}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <h3>Gegevens risico-object</h3>
                    <div className="block"><FormRow
                        showLabel={true}
                        rowName="Naam"
                    >
                        <input
                            type="text"
                            name="clientName"
                            value={formData.clientName}
                            onChange={handleChange}
                        />
                    </FormRow>
                        <FormRow
                            showLabel={true}
                            rowName="Adres"
                        >
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </FormRow><FormRow
                            showLabel={true}
                            rowName="Postcode/Plaats"
                        >
                            <input
                                type="text"
                                name="zipcode_place"
                                value={formData.zipcode_place}
                                onChange={handleChange}
                            />
                        </FormRow><FormRow
                            showLabel={true}
                            rowName="TelefoonNummer"
                        >
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </FormRow>
                        <FormRow
                            showLabel={true}
                            rowName="E-mailadres"
                        >
                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </FormRow></div>
                    <h3>Gegevens beveiligingsbedrijf</h3>
                    <div className="block"><FormRow
                        showLabel={true}
                        rowName="Beveiligingsbedrijf"
                    >
                        <p>{ORGANIZATION_NAME}</p>
                    </FormRow>
                        <FormRow
                            showLabel={true}
                            rowName="Adres"
                        >
                            <p>{ORGANIZATION_ADDRESS}</p>
                        </FormRow>
                        <FormRow
                            showLabel={true}
                            rowName="Postcode/Plaats"
                        >
                            <p>{ORGANIZATIONZIPCODE_PLACE}</p>
                        </FormRow>
                        <FormRow
                            showLabel={true}
                            rowName="TelefoonNummer"
                        >
                            <p>{ORGANIZATION_PHONE}</p>
                        </FormRow>
                        <FormRow
                            showLabel={true}
                            rowName="E-mailadres"
                        >
                            <p>{ORGANIZATION_EMAIL}</p>
                        </FormRow>
                        <FormRow showLabel={true} rowName="Intakedocument opgesteld door: ">
                            <span>Bevoegd persoon Naam:</span>
                            <input
                                type="text"
                                name="employee"
                                value={formData.employee}
                                onChange={handleChange}
                            />
                        </FormRow>
                        <FormRow showLabel={true} rowName="Maatregelen uit te voeren onder:">
                            <div className="double-split"><label>
                                <input
                                    type="checkbox"
                                    name="vebQualityMark"
                                    checked={formData.vebQualityMark || false}
                                    onChange={(e) =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            [e.target.name]: e.target.checked,
                                        }))
                                    }
                                />
                                VEB kwaliteitsregeling
                            </label>
                                <InnerRowRBs
                                    type="radio"
                                    name="borgCertification"
                                    splitValue={1}
                                    selected={formData.borgCertification || ''}
                                    onChange={(e) =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            [e.target.name]: e.target.value,
                                        }))
                                    }
                                    options={['CCV Certificatieschema BORG-B', 'CCV Certificatieschema BORG-E']}
                                    split={true}
                                /></div>

                        </FormRow>
                    </div>
                    <h3>Aanduiding object</h3>
                    <div className="block">
                        <FormRow showLabel={false}>
                            <InnerRowRBs
                                type="radio"
                                name="designatedObject"
                                onChange={handleChange}
                                selected={formData.designatedObject || ''}
                                options={['Woning', 'Bedrijf', 'Winkel/showroom', 'Magazijn/opslag',
                                    'Onderwijsinstelling', '(Semi) overheidsinstelling',
                                    'Anders, namelijk:']}/>
                            {formData.designatedObject === 'Anders, namelijk:' && (
                                <input
                                    type="text"
                                    name="customDesignatedObject"
                                    placeholder="Vul in..."
                                    value={formData.customDesignatedObject || ''}
                                    onChange={handleChange}
                                    style={{marginTop: '0.5em', marginLeft: '1em'}}
                                    required
                                />
                            )}
                        </FormRow>
                    </div>
                    <h3>Eisende partij</h3>
                    <div className="block">
                        <FormRow showLabel={false}>
                            <InnerRowRBs
                                type="radio"
                                name="requestingParty"
                                onChange={handleChange}
                                selected={formData.requestingParty || ''}
                                options={['Bewoner/ eigenaar/ beheerder', 'Verzekeraar',
                                    'Anders, namelijk:']}/>
                            {formData.requestingParty === 'Anders, namelijk:' && (
                                <input
                                    type="text"
                                    name="customRequestingParty"
                                    placeholder="Vul in..."
                                    value={formData.customRequestingParty || ''}
                                    onChange={handleChange}
                                    style={{marginTop: '0.5em', marginLeft: '1em'}}
                                    required
                                />
                            )}
                        </FormRow>
                    </div>
                    <div className="block block_no_header">
                        <FormRow showLabel={true} rowName="Woningen">
                            <span>Waarde attractieve zaken €:</span>
                            <input
                                type="number"
                                name="housesValue"
                                value={formData.housesValue}
                                onChange={handleChange}
                            />
                        </FormRow>
                        <FormRow showLabel={true} rowName="Bedrijven">
                            <InnerRowRBs
                                type="radio"
                                name="companiesValue"
                                onChange={handleChange}
                                selected={formData.companiesValue || ''}
                                options={['Laag €', 'Midden €', 'Hoog €', 'Zeer Hoog €']}
                                split={true}
                                splitValue={2}
                            />
                        </FormRow>
                    </div>
                    <div className="block">
                        <h3>Geconstateerde risicoklasse conform VRKI 2.0</h3>
                        <FormRow showLabel={false}>
                            <InnerRowRBs
                                type="radio"
                                name="riskClass"
                                selected={formData.riskClass || ''}
                                onChange={handleChange}
                                options={['Klasse 1', 'Klasse 2', 'Klasse 3', 'Klasse 4']}
                                split={false}
                            />
                        </FormRow>
                    </div>
                    <div className="block"><h3>Geadviseerde combinatie van maatregelen conform geconstateerde
                        risicoklasse VRKI 2.0</h3>
                        <FormRow showLabel={true} rowName="Organisatorisch">
                            <InnerRowRBs
                                type="radio"
                                name="organisational"
                                onChange={handleChange}
                                selected={formData.organisational || ''}
                                options={['01', '02']}
                                split={false}
                            />
                        </FormRow>
                        <FormRow showLabel={true} rowName="Bouwkundig">
                            <InnerRowRBs
                                type="radio"
                                name="construction"
                                selected={formData.construction || ''}
                                onChange={handleChange}
                                options={['BK1', 'BK2', 'BK3', 'BK4']}
                                split={false}
                            />
                        </FormRow>
                        <FormRow showLabel={true} rowName="Compartiment">
                            <InnerRowRBs
                                type="radio"
                                name="compartment"
                                selected={formData.compartment || ''}
                                onChange={handleChange}
                                options={['CO1', 'CO2', 'CO3', 'CO4']}
                                split={false}
                            />
                        </FormRow>

                        <FormRow showLabel={true} rowName="Meeneem beperkend">
                            <InnerRowRBs
                                type="radio"
                                name="theftProtection"
                                selected={formData.theftProtection || ''}
                                onChange={handleChange}
                                options={['ME1', 'ME2', 'ME3', 'ME4']}
                                split={false}
                            />
                        </FormRow>

                        <FormRow showLabel={true} rowName="Elektronisch">
                            <InnerRowRBs
                                type="radio"
                                name="electronic"
                                selected={formData.electronic || ''}
                                onChange={handleChange}
                                options={['EL1', 'EL2', 'EL3', 'EL4']}
                                split={false}
                            />
                        </FormRow>

                        <FormRow showLabel={true} rowName="Schildetectie">
                            <InnerRowRBs
                                type="radio"
                                name="shieldingDetection"
                                selected={formData.shieldingDetection || ''}
                                onChange={handleChange}
                                options={['SD1', 'SD2', 'SD3', 'SD4']}
                                split={false}
                            />
                        </FormRow>

                        <FormRow showLabel={true} rowName="Alarmtransmissie">
                            <InnerRowRBs
                                type="radio"
                                name="alarmTransmission"
                                selected={formData.alarmTransmission || ''}
                                onChange={handleChange}
                                options={['AT1', 'AT2', 'AT3', 'AT4']}
                                split={false}
                            />
                        </FormRow>

                        <FormRow showLabel={true} rowName="Tech. Alarmverificatie">
                            <InnerRowRBs
                                type="radio"
                                name="verificationTech"
                                selected={formData.verificationTech || ''}
                                onChange={handleChange}
                                options={['Video', 'Audio', 'Meerdere zones']}
                                split={false}
                            />
                        </FormRow>

                        <FormRow showLabel={true} rowName="Reactie">
                            <InnerRowRBs
                                type="radio"
                                name="response"
                                selected={formData.response || ''}
                                onChange={handleChange}
                                options={['RE1', 'RE2', 'RE3', 'RE4']}
                                split={false}
                            />
                        </FormRow>

                        <FormRow showLabel={true} rowName="Maatwerk">
                            <InnerRowRBs
                                type="radio"
                                name="customization"
                                selected={formData.customization || ''}
                                onChange={handleChange}
                                options={['N.V.T.', 'Ja, toelichting in beveiligingsplan']}
                                split={false}
                            />
                        </FormRow>

                        <FormRow showLabel={true} rowName="Partiële beveiliging">
                            <InnerRowRBs
                                type="radio"
                                name="partialProtection"
                                selected={formData.partialProtection || ''}
                                onChange={handleChange}
                                options={['Nee', 'Ja, toelichting in beveiligingsplan']}
                                split={false}
                            />
                        </FormRow>
                        <FormRow showLabel={true} rowName="Onderhoud">
                            <label>
                                <input
                                    type="checkbox"
                                    name="maintenance"
                                    checked={formData.maintenance}
                                    onChange={(e) => {
                                        const isChecked = e.target.checked;
                                        setFormData((prev) => ({
                                            ...prev,
                                            maintenance: isChecked,
                                            maintenanceFrequency: isChecked ? prev.maintenanceFrequency : 0
                                        }));
                                    }}
                                />
                                Contract voor onderhoud
                            </label>

                            {formData.maintenance && (
                                <input
                                    type="number"
                                    name="maintenanceFrequency"
                                    value={formData.maintenanceFrequency}
                                    onChange={handleChange}
                                    // placeholder="keer per jaar"
                                    style={{marginLeft: '1em', width: '100px'}}

                                />
                            )}
                            <span>   keer per jaar</span>
                        </FormRow></div>
                    <h3>Aanvrager wenst offerte/aanbieding</h3>
                    <div className="block"><FormRow
                        showLabel={false}>
                        <InnerRowRBs
                            type="radio"
                            name="proposal"
                            onChange={handleChange}
                            selected={formData.proposal || ''}
                            options={['Totale combinatie beveiligingsmaatregelen conform de geconstateerde ' +
                            'risicoklasse VRKI 2.0',
                                'Afwijkende beveiligingsmaatregelen t.o.v VRKI 2.0, namelijk:']}/>
                        {formData.proposal === 'Afwijkende beveiligingsmaatregelen t.o.v VRKI 2.0, namelijk:' && (
                            <input
                                type="text"
                                name="customProposal"
                                placeholder="Vul in..."
                                value={formData.customProposal || ''}
                                onChange={handleChange}
                                style={{marginTop: '0.5em', marginLeft: '1em'}}
                                required
                            />
                        )}
                    </FormRow></div>
                    <h3>Inventarisatie naar attractiviteit en waarde</h3>
                    <div className="block"><span>Attractieve zaken inboedel (woningen)</span>
                        <span>Waarde in euro's</span>
                    <FormRow showLabel={false}>
                        {formData.housesValueAttractiveness.map((item, index) => (
                            <div key={index} style={{display: 'flex', gap: '1em', marginBottom: '0.5em'}}>
                                <input
                                    type="text"
                                    placeholder="Omschrijving"
                                    value={item.name}
                                    onChange={(e) => handleHouseAttractivenessChange(index, 'name', e.target.value)}
                                    style={{flex: 2}}
                                />
                                <input
                                    type="number"
                                    placeholder="€"
                                    value={item.value}
                                    onChange={(e) => handleHouseAttractivenessChange(index, 'value', e.target.value)}
                                    style={{flex: 1}}
                                />
                                <button
                                    className="print-hidden"
                                    type="button"
                                    onClick={() => removeHouseAttractivenessRow(index)}
                                    style={{marginLeft: '0.5em'}}
                                >
                                    X
                                </button>
                            </div>
                        ))}
                    </FormRow>
                    </div>
                    <Button
                        type="button"
                        onClick={addHouseAttractivenessRow}>+ Voeg toe
                    </Button>
                    <div className="block">
                        <span>Attractieve goederen en inventaris (bedrijven)</span>
                        <span>Waarde in euro's</span>
                    <FormRow showLabel={false}>
                        {formData.companiesValueAttractiveness.map((item, index) => (
                            <div key={index} style={{display: 'flex', gap: '1em', marginBottom: '0.5em'}}>
                                <input
                                    type="text"
                                    placeholder="Omschrijving"
                                    value={item.name}
                                    onChange={(e) => handleCompanyAttractivenessChange(index, 'name', e.target.value)}
                                    style={{flex: 2}}
                                />
                                <input
                                    type="number"
                                    placeholder="€"
                                    value={item.value}
                                    onChange={(e) => handleCompanyAttractivenessChange(index, 'value', e.target.value)}
                                    style={{flex: 1}}
                                />
                                <button
                                    className="print-hidden"
                                    type="button"
                                    onClick={() => removeCompanyAttractivenessRow(index)}
                                    style={{marginLeft: '0.5em'}}
                                >
                                    X
                                </button>
                            </div>
                        ))}
                    </FormRow>
                    </div>
                    <Button  type="button" onClick={addCompanyAttractivenessRow}>+ Voeg toe</Button>

                </div>
                <Button classname="submit" type="submit">Submit</Button>
            </form>
        </div>
    );

}

export default AlarmIntakeForm;
