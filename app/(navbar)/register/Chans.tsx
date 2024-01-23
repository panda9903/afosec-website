import * as React from 'react';
import {
    DropdownMenu,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuCheckboxItem,
    DropdownMenuTrigger,
    DropdownMenuContent,
} from '@radix-ui/react-dropdown-menu';
import './Chans.css'; // Import the CSS file

const departments = ['Department 1', 'Department 2', 'Department 3'];
const departmentEvents = {
    'Department 1': { type1: ['Event 1', 'Event 2', 'Event 3', 'Event 4'], type2: ['Event 5', 'Event 6', 'Event 7', 'Event 8'] },
    'Department 2': { type1: ['Event 9', 'Event 10', 'Event 11', 'Event 12'], type2: ['Event 13', 'Event 14', 'Event 15', 'Event 16'] },
    'Department 3': { type1: ['Event 17', 'Event 18', 'Event 19', 'Event 20'], type2: ['Event 21', 'Event 22', 'Event 23', 'Event 24'] },
};

export function Chans() {
    const [selectedDepartment, setSelectedDepartment] = React.useState('');
    const [selectedType1Events, setSelectedType1Events] = React.useState<string[]>([]);
    const [selectedType2Events, setSelectedType2Events] = React.useState<string[]>([]);

    const handleEventChange = (setSelectedEvents: React.Dispatch<React.SetStateAction<string[]>>) => (
        event: string,
        checked: boolean
    ) => {
        setSelectedEvents(prevEvents => {
            if (checked && prevEvents.length < 2) {
                return [...prevEvents, event];
            } else if (!checked) {
                return prevEvents.filter(e => e !== event);
            } else {
                return prevEvents;
            }
        });
    };

    const events = selectedDepartment ? departmentEvents[selectedDepartment] : { type1: [], type2: [] };

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger style={{ backgroundColor: 'lightgray', borderRadius: '8px', color: 'black', fontWeight: 'bold', fontFamily: 'Arial', width: '200px' }}>{selectedDepartment || 'Select Department'}</DropdownMenuTrigger>
                <DropdownMenuContent style={{ backgroundColor: 'lightgray', borderRadius: '8px', color: 'black' }}>
                    <DropdownMenuRadioGroup value={selectedDepartment} onValueChange={setSelectedDepartment}>
                        {departments.map(department => (
                            <DropdownMenuRadioItem key={department} value={department}>
                                {department}
                            </DropdownMenuRadioItem>
                        ))}
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>

            {selectedDepartment && (
                <>
                    <DropdownMenu style={{ marginLeft: '20px' }} closeOnSelect={false}>
                        <DropdownMenuTrigger style={{ backgroundColor: 'lightgray', borderRadius: '8px', color: 'black', fontWeight: 'bold', fontFamily: 'Arial'  }}>Select Type 1 Events</DropdownMenuTrigger>
                        <DropdownMenuContent style={{ backgroundColor: 'lightgray', borderRadius: '8px', color: 'black' }}>
                            {events.type1.map(event => (
                                <DropdownMenuCheckboxItem
                                    key={event}
                                    checked={selectedType1Events.includes(event)}
                                    onCheckedChange={handleEventChange(setSelectedType1Events)}
                                    style={{ backgroundColor: selectedType1Events.includes(event) ? 'white' : 'transparent', color: selectedType1Events.includes(event) ? 'white' : 'black', fontWeight: 'bold', fontFamily: 'Arial' }}
                                >
                                    {event}
                                </DropdownMenuCheckboxItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu style={{ marginLeft: '20px' }} closeOnSelect={false}>
                        <DropdownMenuTrigger style={{ backgroundColor: 'lightgray', borderRadius: '8px', color: 'black', fontWeight: 'bold', fontFamily: 'Arial' }}>Select Type 2 Events</DropdownMenuTrigger>
                        <DropdownMenuContent style={{ backgroundColor: 'lightgray', borderRadius: '8px', color: 'black' }}>
                            {events.type2.map(event => (
                                <DropdownMenuCheckboxItem
                                    key={event}
                                    checked={selectedType2Events.includes(event)}
                                    onCheckedChange={handleEventChange(setSelectedType2Events)}
                                    style={{ backgroundColor: selectedType2Events.includes(event) ? 'green' : 'transparent', color: selectedType2Events.includes(event) ? 'white' : 'black', fontWeight: 'bold', fontFamily: 'Arial' }}
                                >
                                    {event}
                                </DropdownMenuCheckboxItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </>
            )}
        </>
    );
}