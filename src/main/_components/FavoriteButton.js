import { useEffect, useState } from "react";
import { Favorite, FavoriteBorder, FavoriteTwoTone } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import ActiveFeatureModal from "./ActiveFeatureModal";
import api from "../../api";

const FavoriteButton = ({item_type, item_id, item, setLoaded, outlineColor = 'black'}) => {
    const [className, setClassName] = useState('')
    const [favorited, setFavorited] = useState(false);
    const signedIn = useSelector(state=>state.userSlice.signedIn)
    const user = useSelector(state=>state.userSlice.user);
    const [openSubscribeModal, setOpenSubscribeModal] = useState(false)
    const dispatch = useDispatch();

    const handleFavorite = () => {
        if (signedIn) {
            const animate = true;
            
            let saveOrDelete = 'postRequest';
            if (favorited) {
                saveOrDelete = 'deleteRequest'
            }
            
            api[saveOrDelete]('/api/favorite',{user_id: user.id, item_id: item_id})
                .then(result => {
                    if (result.error) {
                        // handle server side error
                    } else {
                        if (animate) {
                            setClassName('relative');
                            setTimeout(()=>{
                                setClassName('')
                            }, 67)
                            setTimeout(()=>{
                                setFavorited(!favorited);
                                setClassName('animate-ping-reverse-fast relative')
                            }, 125)
                            // make any updates with favorite update
                        } else {
                            setFavorited(!favorited)
                        }
                    }
                })
                .catch(error => {
                    // handle favoriting error
                })

        } else {
            setOpenSubscribeModal(true);
            return;
        }
    }

    const render = () => {
        if (signedIn) {
            if (favorited) {
                return (
                    <>
                        <Favorite sx={{'color': 'red'}} className="cursor-pointer hover:animate-wiggle absolute m-auto" fontSize='large'/>
                        <FavoriteBorder sx={{'color': outlineColor }} className="cursor-pointer hover:animate-wiggle absolute m-auto" fontSize='large'/>
                    </>
                )
            } else {
                return (
                    <FavoriteBorder sx={{'color': outlineColor}} className="cursor-pointer hover:animate-wiggle absolute" fontSize="large" />        
                )
            }
        } else {
            return (
                <FavoriteBorder className="cursor-pointer absolute" sx={{'color': 'grey'}} fontSize="large" /> 
            )
        }
    }

    useEffect(()=>{
        if (signedIn) {
            api.getRequest(`/api/favorite/${user.id}/${item_id}`)
                .then(result => {
                    if (result.error) {
                        setFavorited(false);
                    } else {
                        setFavorited(Boolean(result.data.length))
                    }
                    if (setLoaded !== undefined) {
                        setLoaded(true)
                    }
                })
                .catch(error => {
                    setFavorited(false);
                })
        } else {
            if (setLoaded !== undefined) {
                setLoaded(true)
            }
        }
    },[])

    return (
        <>
            <IconButton className={className} color="inherit" disableFocusRipple disableRipple onClick={(e) => handleFavorite(e)}>
                <div className="relative flex justify-center align-center items-center">
                    {render()}
                </div>
            </IconButton>
            <ActiveFeatureModal open={openSubscribeModal} message={'Sign in to track your favorites!'} setOpen={setOpenSubscribeModal}/>
        </>
    )
}

export default FavoriteButton;