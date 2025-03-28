import React, {useState} from 'react';
import FormRow from "../../../components/FormRow.jsx";
import Button from "../../../components/Button.jsx";
import InnerRowRBs from "../../../components/InnerRowRBs.jsx";
import {
    ORGANIZATION_ADDRESS,
    ORGANIZATION_EMAIL,
    ORGANIZATION_NAME,
    ORGANIZATION_PHONE,
    ORGANIZATIONZIPCODE_PLACE
} from "../../../companyConfig.js";

function AlarmIntakeForm() {
    const [formData, setFormData] = useState({
        clientname: '',
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
        maintenance: false ,
        customMaintenance: '',

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

            if (name === 'maintenance' && value !== 'Contract voor onderhoud') {
                updated.maintenanceFrequency = '';
            }

            return updated;
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        // const success = await handleIntakeForm(formData);
        // if (success) {
        //     console.log("Form created and submitted");
        // } else {
        //     console.log("Form submission failed");
        // }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div id="pdf-content">
                    <FormRow
                        showLabel={true}
                        rowName="Naam"
                    >
                        <input
                            type="text"
                            name="clientname"
                            value={formData.clientname}
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
                    </FormRow>
                    <FormRow
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
                    <FormRow showLabel={false} rowName="Woningen">
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
                                        maintenanceFrequency: isChecked ? prev.maintenanceFrequency : ''
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
                                placeholder="keer per jaar"
                                style={{ marginLeft: '1em', width: '100px' }}
                            />
                        )}
                    </FormRow>




                </div>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    );

}

export default AlarmIntakeForm;
