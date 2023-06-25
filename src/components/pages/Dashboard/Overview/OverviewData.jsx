import { GoChevronUp, GoChevronDown } from 'react-icons/go'

 const OverviewData = [
    {
        id: 1,
        title:'All Loans',
        icon: <GoChevronUp/>,
        range: '15%',
        rate: 'Increase',
        amount: '1050'
    },
    {
        id: 2,
        title:'New Applications',
        icon: <GoChevronUp/>,
        range: '40%',
        rate: 'Increase',
        amount: '35'
    },
    {
        id: 3,
        title:'Pending Loans',
        icon: <GoChevronUp/>,
        range: '5%',
        rate: 'Increase',
        amount: '30'
    },
    {
        id: 4,
        title:'Active Loans',
        icon: <GoChevronUp/>,
        range: '12%',
        rate: 'Increase',
        amount: '60'
    },
    {
        id: 5,
        title:'Due Loans',
        icon: <GoChevronUp/>,
        range: '12%',
        rate: 'Increase',
        amount: '30'
    },
    {
        id: 6,
        title:'Extended Loans',
        icon: <GoChevronUp/>,
        range: '8%',
        rate: 'Increase',
        amount: '35'
    },
    {
        id: 7,
        title:'Defaulted Loans',
        icon: <GoChevronDown/>,
        range: '10%',
        rate: 'Decrease',
        amount: '60'
    },
    {
        id: 8,
        title:'Closed Loans',
        icon: <GoChevronUp/>,
        range: '12%',
        rate: 'Increase',
        amount: '98'
    },

];
export default OverviewData;