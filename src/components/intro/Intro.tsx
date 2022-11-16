import {useEffect, useState} from "react";
import {IntroDiv, Text, Logo} from "./styles";

export default function Intro () {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [hide, setHide] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShow(!show);
        }, 400);
        setTimeout(() => {
            setShow2(!show2);
        }, 800);
        setTimeout(() => {
            setHide(!hide);
        }, 1500);
    },[])

    return (
        <IntroDiv hide={hide}><Text><Logo active={show}>Lena&nbsp;</Logo><Logo active={show2}>Klimova</Logo></Text></IntroDiv>
    )
};