import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.5);
`;

const ModalBox = styled.div`
    position: relative;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 55px;
    padding-left: 50px;
    padding-right: 38px;
    padding-top: 43px;
    border-radius: 22px;
`;

const Title = styled.div`
    font-size: 25px;
    margin-bottom: 25px;
    color: #50524f;
`;

const SubTitle = styled.div`
    font-size: 18px;
    margin-bottom: 40px;
    margin-left: 30px;
    max-width: 500px;
    color: #50524f;
`;

const ButtonGroup = styled.div``;

const Confirm = styled.button`
    background-color: white;
    border: 1px solid #4490e6;
    padding: 14px;
    font-size: 18px;
    color: #4490e6;
    border-radius: 100px;
    font-weight: 100;
    margin-left: 47px;
`;

const Deny = styled.button`
    display: inline-block;
    background-color: white;
    border: 1px solid #d7d7d7;
    color: #aaa09f;
    padding: 14px;
    font-size: 18px;
    font-weight: 100;
    border-radius: 100px;
`;

const iconAttrs = () => ({
    icon: faTimes,
    color: '#d5d5d5'
})

const Icon = styled(FontAwesomeIcon).attrs(iconAttrs)`
    position: absolute;
    align-self: flex-end;
    top: 17px;
    right: 17px;
    font-size: 20px;
`;

type ModalProps = {
    title: string
    subTitle: string
    confirm: string
    deny: string
    isOpen: boolean
    onClose: () => void
    onDeny: () => void
    onConfirm: () => void
}

const Modal = ({
    title,
    subTitle,
    confirm,
    deny,
    isOpen,
    onClose,
    onDeny,
    onConfirm,
}: ModalProps) => {
    
    return (
        <>
            {isOpen && (
                <Container>
                    <ModalBox>
                        <Icon onClick={onClose}/>
                        <Title>{title}</Title>
                        <SubTitle>{subTitle}</SubTitle>
                        <ButtonGroup>
                            <Deny onClick={onDeny}>{deny}</Deny>
                            <Confirm onClick={onConfirm}>{confirm}</Confirm>
                        </ButtonGroup>
                    </ModalBox>
                </Container>
            )}
        </>
    );
}

type UseWithModalArgs = {
    title: string
    subTitle: string
    confirm: string
    deny: string
    startsOpen?: boolean
}

export const useWithModal = ({
    title,
    subTitle,
    confirm,
    deny,
    startsOpen = false
}: UseWithModalArgs) => {
    const [isOpen, setIsOpen] = useState(startsOpen);

    const open = () =>  setIsOpen(true);
    const close = () =>  setIsOpen(false);

    return {
        isOpen,
        open,
        bind: {
            title,
            subTitle,
            confirm,
            deny,
            isOpen,
            onClose: close,
            onDeny: close,
            onConfirm: close,
        } as ModalProps,
    }
}


export default Modal;