import { ReactChild, ReactChildren } from 'react';
import styled from 'styled-components';

export const List = styled.ul``;

export const ListItem = styled.li`
    color: #00abe6;
    list-style-type: circle;

`;

const Link = styled.a`
    text-decoration: underline;
    text-decoration-thickness: 2px;
    font-weight: 900;
`;

type LinkItemProps = {
    url: string
    children: ReactChild | ReactChildren
}

export const LinkItem = (props: LinkItemProps) => (
    <ListItem>
        <Link href={props.url}>
            {props.children}
        </Link>
    </ListItem>
);

export default List;