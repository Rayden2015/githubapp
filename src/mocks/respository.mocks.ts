import { USER_LIST} from '../mocks/user.mocks';
import { Repository} from '../models/repository.interface';

const repositoryList: Repository[] = [
    {
        name: 'IOnic 3 Camera',
        description: 'Preview of IOnic 3 camera functionality and sample code',
        owner: USER_LIST[0]
    },
    {
        name: 'IOnic 3 Flashlight',
        description: 'Preview of IOnic 3 Flashlight functionality and sample code',
        owner: USER_LIST[0]
    },
    {
        name: 'IOnic 3 Barcodescanner',
        description: 'Preview of IOnic 3 Barcodescanner functionality and sample code',
        owner: USER_LIST[1]
    },
    {
        name: 'IOnic 3 Geolocation',
        description: 'Preview of IOnic 3 Geolocation functionality and sample code',
        owner: USER_LIST[1]
    }      
];

export const REPOSITORY_LIST = repositoryList;