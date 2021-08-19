import List, { LinkItem } from '@components/List';
import { faEquals } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 8.4rem;
    padding-left: 4rem;
    padding-right: 4rem;
    background-color: #1f2732;
    color: #FFFFFF;

    @media(max-width: 350px) { 
        padding-left: 2rem;
        padding-right: 2rem;
        justify-content: space-between;
    }
    @media(max-width: 750px) { 
        height: 6.4rem; 
    }
    @media(min-width: 1500px) { 
        height: 8.4rem; 
    }
`;

const Name = styled.div`
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    color: #30c2f5;
    font-weight: 900;
    font-size: 2rem;
    @media(max-width: 750px) { font-size: 1.8rem; }
    @media(min-width: 1500px) { font-size: 2.4rem; }
`;

const JobTitle = styled.span`
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    color: #C1C1C1;
    font-size: 1.1rem;
    @media(max-width: 350px) { align-items: flex-end; }
    @media(max-width: 750px) { font-size: 1rem; }
    @media(min-width: 1500px) { font-size: 1.3rem; }
`;

const UpperBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 4rem;
    padding-bottom: 4.4rem;
    background-color: #051842;
    color: #c5d9ff;
    text-align: center;
    @media(max-width: 750px) { 
        padding-top: 2rem;
        padding-bottom: 2.3rem;
    }
    @media(min-width: 1500px) { 
        padding-top: 6rem;
        padding-bottom: 6.6rem;
    }
`;

const Equals = styled.div`
    margin-top: 1.5rem;
    margin-bottom: 1rem;
`;

const equalsIconAttrs = () => ({icon: faEquals});
const EqualsIcon = styled(FontAwesomeIcon).attrs(equalsIconAttrs)`
    color: #d15efa;
    font-size: 1.8rem; 
    padding-left: 2px;
    @media(max-width: 750px) { 
        font-size: 1.6rem;
        padding-left: 1px;
    }
    @media(min-width: 1500px) { 
        font-size: 2.4rem; 
        padding-left: 3px;
    }
`;

const Quote = styled.div`
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    font-weight: 900;
    font-size: 1.8rem;
    @media(max-width: 750px) { font-size: 1.6rem; }
    @media(min-width: 1500px) { font-size: 2.4rem; }
`;

const underline = css`
    text-decoration: underline;
    text-decoration-thickness: .2rem;
`;

const Slow = styled.span`
    color: white; 
    ${underline}
`;

const Deliberate = styled.span`
    color: #5083ee;
    ${underline}
`;

const Fast = styled.span`
    color: white;
    ${underline}
`;

const HighQuality = styled.span`
    color: rgba(73,75,235,1);
    ${underline}
`;

const LowerBody = styled.div`
    height: 150rem;
    /* background-color: #3563a2; */
    background-color: #354356;
`;

export default function Home() {
    return (
        <Container>
            <Header>
                <Name>
                    <span>Tristan</span>
                    <span>Barrow</span>
                </Name>
                <JobTitle>
                    <span>Full</span>
                    <span>Stack</span>
                    <span>Developer</span>
                </JobTitle>
            </Header>

            <UpperBody>
                <Quote>
                    <Slow>Slow</Slow> and {' '}
                    <Deliberate>Deliberate</Deliberate> {' '}
                    Development
                </Quote>
                <Equals><EqualsIcon /><EqualsIcon /></Equals>
                <Quote>
                    <Fast>Fast</Fast> Delivery and {' '}
                    <HighQuality>High Quality</HighQuality> {' '}
                    Products
                </Quote>
            </UpperBody>
            <LowerBody>

                <List>
                    <LinkItem url='/sleep-tracker'>Sleep Tracker</LinkItem>
                </List>
            </LowerBody>

        </Container>
    );
}
