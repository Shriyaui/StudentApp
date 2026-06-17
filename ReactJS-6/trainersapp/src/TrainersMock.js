// TrainersMock.js - Mock Trainer Data
import Trainer from './Trainer';

const trainers = [
    new Trainer(
        1,
        'John Smith',
        'john.smith@cognizant.com',
        '+1 555-0101',
        'React',
        ['JavaScript', 'React', 'Redux', 'Node.js']
    ),
    new Trainer(
        2,
        'Sarah Johnson',
        'sarah.j@cognizant.com',
        '+1 555-0102',
        'Java',
        ['Java', 'Spring Boot', 'Microservices', 'AWS']
    ),
    new Trainer(
        3,
        'Michael Brown',
        'michael.b@cognizant.com',
        '+1 555-0103',
        'Python',
        ['Python', 'Django', 'Flask', 'Machine Learning']
    ),
    new Trainer(
        4,
        'Emily Davis',
        'emily.d@cognizant.com',
        '+1 555-0104',
        'Angular',
        ['JavaScript', 'Angular', 'TypeScript', 'RxJS']
    ),
    new Trainer(
        5,
        'David Wilson',
        'david.w@cognizant.com',
        '+1 555-0105',
        'DevOps',
        ['Docker', 'Kubernetes', 'Jenkins', 'AWS']
    ),
    new Trainer(
        6,
        'Lisa Anderson',
        'lisa.a@cognizant.com',
        '+1 555-0106',
        'React',
        ['JavaScript', 'React', 'Next.js', 'Tailwind CSS']
    )
];

export default trainers;