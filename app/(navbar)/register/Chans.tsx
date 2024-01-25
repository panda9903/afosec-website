import * as React from 'react';

const departments = ['Department 1', 'Department 2', 'Department 3'];

type DepartmentEvents = {
    'Department 1': { type1: string[]; type2: string[] };
    'Department 2': { type1: string[]; type2: string[] };
    'Department 3': { type1: string[]; type2: string[] };
};

const departmentEvents: DepartmentEvents = {
    'Department 1': { type1: ['Event 1', 'Event 2', 'Event 3', 'Event 4'], type2: ['Event 5', 'Event 6', 'Event 7', 'Event 8'] },
    'Department 2': { type1: ['Event 9', 'Event 10', 'Event 11', 'Event 12'], type2: ['Event 13', 'Event 14', 'Event 15', 'Event 16'] },
    'Department 3': { type1: ['Event 17', 'Event 18', 'Event 19', 'Event 20'], type2: ['Event 21', 'Event 22', 'Event 23', 'Event 24'] },
};

export function Chans() {
    const [selectedDepartment, setSelectedDepartment] = React.useState<keyof DepartmentEvents | ''>('');
    const [selectedType1Events, setSelectedType1Events] = React.useState<string[]>([]);
    const [selectedType2Events, setSelectedType2Events] = React.useState<string[]>([]);

    const handleEventChange = (setSelectedEvents: React.Dispatch<React.SetStateAction<string[]>>, event: string) => {
        setSelectedEvents(prevEvents => {
            if (prevEvents.includes(event)) {
                return prevEvents.filter(e => e !== event);
            } else if (prevEvents.length < 2) {
                return [...prevEvents, event];
            } else {
                return prevEvents;
            }
        });
    };

    const events = selectedDepartment ? departmentEvents[selectedDepartment] : { type1: [], type2: [] };

    return (
        <div>
            <h2>Select Department</h2>
            {departments.map(department => (
                <div key={department}>
                    <input type="radio" id={department} name="department" value={department} onChange={() => setSelectedDepartment(department as keyof DepartmentEvents)} />
                    <label htmlFor={department}>{department}</label>
                </div>
            ))}

            {selectedDepartment && (
                <>
                    <h2>Select Type 1 Events</h2>
                    {events.type1.map(event => (
                        <div key={event}>
                            <input type="checkbox" id={event} name="type1Event" value={event} checked={selectedType1Events.includes(event)} onChange={() => handleEventChange(setSelectedType1Events, event)} />
                            <label htmlFor={event}>{event}</label>
                        </div>
                    ))}

                    <h2>Select Type 2 Events</h2>
                    {events.type2.map(event => (
                        <div key={event}>
                            <input type="checkbox" id={event} name="type2Event" value={event} checked={selectedType2Events.includes(event)} onChange={() => handleEventChange(setSelectedType2Events, event)} />
                            <label htmlFor={event}>{event}</label>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}