import Tabs from "./index";
import './tabs.css'


export default function TestTabs(){

    function RandomComponent(){

        return <h1>Some Custom Content</h1>
    }

    const tabs = [
        {
            label: 'Tab 1',
            content : <div>this is content For tab 1</div>
        },
        {
            label: 'Tab 2',
            content : <div>this is content For tab 2</div>
        },
        {
            label: 'Tab 3',
            content: <RandomComponent />
        },
        {
            label: 'Tab 4',
            content : <div>this is content for tab 4</div>
        }
    ]


    function handleChange(currentTabIndex){
        console.log(currentTabIndex);
        
    }

    return (
        <Tabs tabsContent={tabs} onChange={handleChange}/>
    )
}