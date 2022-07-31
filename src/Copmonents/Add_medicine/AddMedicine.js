import './AddMedicine.css'
import Creatable from 'react-select/creatable';
import Select from 'react-select'
const groupFarma = [
    {
        value: 'Neyroliptik',
        label: 'Neyroliptik'
    },
    {
        value: 'Yana nimadir',
        label: 'Yana nimadir'
    },
    {
        value: 'Yana qaysidir',
        label: 'Yana qaysidir'
    }
]
const colourOptions = [{
    value: 'parasetamol',
    label: 'parasetamol'

}, {
    value: 'bisoprolol',
    label: 'bisoprolol'
}, {
    value: 'sulpirid',
    label: 'sulpirid'
}, {
    value: 'fenibut',
    label: 'fenibut'
}]

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        borderBottom: '1px dotted pink',
        color: state.isSelected ? 'red' : 'blue',
        padding: 0,
    }),
    control: () => ({
        // none of react-select's styles are passed to <Control />
        width: 200,
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return { ...provided, opacity, transition };
    }
}
const AddMedicine = () => {
    return <div className='Add-medicine'>
        <div className='Add-medicine__element'>
            <input placeholder='ex:dori shakli dorining sotuv nomi dozasi' />
        </div>
        <div className='Add-medicine__element'>
            <label>Dorining sotuvdagi nomi</label><br />
            <input />
        </div>
        <div className='Add-medicine__element'>
            <label>Dorining do'zasi</label><br />
            <input type={'number'} />
            <select className='Add-medicine__select'>
                <option value={'mg'}>mg</option>
                <option value={'gr'}>gr</option>
                <option value={'TB'}>TB</option>
                <option value={'ml'}>ml</option>
            </select>
        </div>
        <div className='Add-medicine__element'>
            <label>Xalqaro patentlanmagan nomi</label>
            <input />
        </div>
        <div className='Add-medicine__element'>
            <label>Dori shakli</label>
            <select className='Add-medicine__select'>
                <option>Tabletka</option>
                <option>Kapsula</option>
                <option>Ampula</option>
            </select>
        </div>
        <div className='Add-medicine__element'>
            <label>Farmakoterapevtik guruhi</label>
            {/*<select className='Add-medicine__select'>
                {groupFarma.map(x => <option key={x} value={x}>{x}</option>)}
            </select>

            <br />
            <br />
            <input /><button disabled className='Add-medicine__btn'>+</button>*/}
            <Creatable options={groupFarma} />
        </div>
        <div className='Add-medicine__element'>
            <label>Tarkibi</label>
            <Select options={colourOptions} />

        </div>
        <div className='Add-medicine__element'>
            <label>Ta'rifi</label>
            <textarea />
        </div>
        <div className='Add-medicine__element'>
            <label>ishlab chiqaruvchi</label>
            <select>
                <option>Nobel</option>
                <option>DR Reddy</option>
                <option>Sonafi</option>
            </select>
            <select>
                <option>Turkiya</option>
                <option>Xindiston</option>
                <option>Fransiya</option>
            </select>
        </div>
    </div>
}
export default AddMedicine;