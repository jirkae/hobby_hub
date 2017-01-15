import axios, { CancelToken } from 'axios';
import { BASE_URL, BASE_URL_GRAPHQL } from './baseUrl.js';
import Lokka from 'lokka';
import { Transport } from 'lokka-transport-http';

let api = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'charset': 'utf-8'
    }
});

const client = new Lokka({
    transport: new Transport(BASE_URL_GRAPHQL)
});

export function fetchCities(cityQuery) {
    const query =
        `query getCities($query: String!) {
           cities(Query: $query) {
                 name
            }
        }`;
    const vars = { query: cityQuery.value };

    return client.query(query, vars).then((result) => {
        return result.cities;
    });
}

export function fetchTags(tagsQuery) {
    const query =
        `query getTags($query: String!) {
           tags: distinctTags(Query: $query) {
                 name
            }
        }`;
    const vars = { query: tagsQuery.value };

    return client.query(query, vars).then((result) => {
        return result.tags;
    });
}

export function getLatestEvents() {
    const query =
        `query getLatestEvents($count: Int!) {
            events(first: $count) {
            id
            name
            description
            tags
            city
            startDate
            }
        }`;
    const vars = { count: 5 };

    return client.query(query, vars).then((result) => {
        return result.events;
    });
}

export function getEvents(params) {
    const query =
        `query findEvents($tags: [String], $cities: [String]) {
            events: eventByTagsOrCities(tags: $tags, cities: $cities) {
                id
                name
                description
                tags
                city
                startDate
                }
        }`;
    const vars = { tags: params.tags, cities: params.cities };

    return client.query(query, vars).then((result) => {
        return result.events;
    });
}

export function postLogin(props) {
    const mutation =
        `($email:String!, $password:String!)
            {
                authMutation {
                    data: login(email:$email, password:$password)
                    {
                        id,
                        userId
                    }
                }
            }`;

    const vars = Object.assign({}, props);

    return client.mutate(mutation, vars).then((result) => {
        return result.authMutation;
    });
}

export function postRegister(props) {
    const mutation =
        `($userData: RegistrationInput!)
            {
                authMutation {
                    data: register(userData:$userData)
                    {
                        id,
                        email,
                        firstName,
                        lastName
                    }
                }
            }`;

    const data = Object.assign({}, props);
    const vars = { userData: data };

    return client.mutate(mutation, vars).then((result) => {
        return result.authMutation;
    });
}

//neni potreba user
export function postEvent(event, user) {
    const mutation =
        `($token: String!, $eventData: EventInput) {
            eventMutation(token: $token) {
                data: newEvent(eventData: $eventData) {
                    id
                }
            }
        }`;

    const data = Object.assign({}, event);
    const vars = { eventData: data, token: api.defaults.headers.common['Authorization'] };

    return client.mutate(mutation, vars).then((result) => {
        return result.eventMutation;
    });
}

//neni potreba user
export function updateEvent(event, user, eventId) {
    const mutation =
        `($token: String!, $eventData: EventInput, $id: String!) {
            eventMutation(token: $token) {
                data: updateEvent(id:$id, eventData: $eventData) {
                    id
                }
            }
        }`;

    const data = Object.assign({}, event);
    const vars = { eventData: data, token: api.defaults.headers.common['Authorization'], id: eventId };

    return client.mutate(mutation, vars).then((result) => {
        return result.eventMutation;
    });
}

export function postLogout(token) {
    const mutation =
        `($token:String!){
            authMutation{
                logout(token:$token)
            }
        }`;

    const vars = { token: token };

    return client.mutate(mutation, vars).then((result) => {
        return result;
    });
}

export function getUserData(id) {
    const query =
        `query($id: ID!)
            {
                data: userByID(UserID: $id)
                {
                    id,
                    email,
                    firstName,
                    lastName,
                    phoneNumber,
                    info,
                    otherUsersComments {
                        id,
                        text,
                        dateCreated,
                        rating
                    }
                }
            }`;
    const vars = { id: id };

    return client.query(query, vars).then((result) => {
        return result;
    });
}

export function putUserData(user) {

    const userData = {
        firstName: user.firstName,
        lastName: user.lastName,
        info: user.info,
        interests: user.interests
    };

    const mutation =
        `($token:String!, $userData:UserInput)
            {
                userMutation(token:$token)
                {
                    data: updateUser(userData:$userData)
                    {
                        id,
                        email,
                        firstName,
                        lastName,
                        phoneNumber,
                        info
                    }
                }
            }`;

    const data = Object.assign({}, userData);
    const vars = { userData: data, token: user.id };

    return client.mutate(mutation, vars).then((result) => {
        return result.userMutation;
    });
}

export function getCancelTokenSource() {
    return CancelToken.source();
}

//potvrzeny / nepotvrzeny
export function getParticipants(eventId) {
    const query =
        `query($id: ID!){
            data: eventByID(EventID:$id)
                {
                    participantsRequested{
                        id,
                        email,
                        firstName,
                        lastName
                },
                    participantsConfirmed{
                        id,
                        email,
                        firstName,
                        lastName
            }
        }
        }`;
    const vars = { id: eventId };

    return client.query(query, vars).then((result) => {
        return result;
    });
}

//neni potreba predavat userId v props
export function postToggleParticipation(props, authToken) {
    const mutation =
        `($token:String!, $eventId:String!){
            eventMutation(token:$token)
            {
                data: toggleParticipation(eventId:$eventId)
            }
        }`;

    const vars = { token: authToken, eventId: props.eventId };

    return client.mutate(mutation, vars).then((result) => {
        return result.eventMutation;
    });
}

export function postToggleConfirmation(props, authToken) {
    const mutation =
        `($token:String!, $eventId:String!){
            eventMutation(token:$token)
            {
                data: toggleConfirmation(eventId:$eventId)
            }
        }`;

    const vars = { token: authToken, eventId: props.eventId };

    return client.mutate(mutation, vars).then((result) => {
        return result.eventMutation;
    });
}

//neni potreba? nestaci vybrat event podle id eventu?
export function getEventOwnedByuser(user, event) {
    return api.get(`${BASE_URL}AuthUsers/${user.userId}/ownEvents/${event.id}`)
}

export function getOwnedEvents(userId) {
    const query =
        `query($userId: ID!){
            userByID(UserID: $userId)
            {
                data: ownEvents{
                    id,
                    name,
                    description,
                    detailedDescription,
                    tags,
                    city,
                    startDate
                }
            }
        }`;
    const vars = { userId: userId };

    return client.query(query, vars).then((result) => {
        return result.userByID;
    });
}

export function getEventById(eventId) {
    const query =
        `query ($eventId: ID!) {
            data: eventByID(EventID: $eventId) {
                id
                name
                description
                detailedDescription
                tags
                participantsMin
                participantsMax
                participantsConfirm
                city
                street
                zipCode
                startDate
                endDate
                dateCreated
                dateUpdated
                price,
                ownerId,
                comments {
                    id,
                    text,
                    dateCreated
                }
            }
        }`;
    const vars = { eventId: eventId };

    return client.query(query, vars).then((result) => {
        return result;
    });
}

export function newEventComment(eventId, text) {
    const mutation =
        `($token:String!, $eventId:String!, $text:String!)
            {
                eventMutation(token:$token) {
                    data: newComment(eventId:$eventId, text:$text) {
                        id,
                        text,
                        dateCreated
                    }
                }
        }`;

    const vars = {
        text: text,
        eventId: eventId,
        token: api.defaults.headers.common['Authorization']
    };

    return client.mutate(mutation, vars).then((result) => {
        return result.eventMutation;
    });
}

export function newUserComment(targetUserId, text, rating) {
    const mutation =
        `($token:String!, $targetUserId:String!, $text:String!, $rating:Int!)
            {
                userMutation(token:$token) {
                    data: newUserComment(targetUserId:$targetUserId, text:$text, rating:$rating) {
                        id,
                        text,
                        dateCreated,
                        rating
                    }
                }
        }`;

    const vars = {
        text: text,
        targetUserId: targetUserId,
        rating: rating,
        token: api.defaults.headers.common['Authorization']
    };

    return client.mutate(mutation, vars).then((result) => {
        return result.userMutation;
    });
}

export function setAuthToken(authToken) {
    api.defaults.headers.common['Authorization'] = authToken;
}