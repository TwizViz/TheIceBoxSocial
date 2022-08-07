export const getComments = async () => {
    return(
        [
            {
                id: 1,
                body: 'First Comment',
                username: 'Jack',
                userId: 1,
                parentId: null,
                createdAt: Date.now().toLocaleString(),
            },
            {
                id: 2,
                body: 'Second Comment',
                username: 'John',
                userId: 2,
                parentId: null,
                createdAt: Date.now().toLocaleString(),
            },
            {
                id: 3,
                body: 'First Comment Response',
                username: 'John',
                userId: 2,
                parentId: 1,
                createdAt: Date.now().toLocaleString(),
            },
        ]
    );
};

export const createComment = async(text, parentId = null) => {
    return{
        id: Math.random().toString(36).substr(2, 9),
        body: text,
        parentId,
        userId: 1,
        username: 'Jack',
        createdAt: new Date().toISOString(),
    };
};