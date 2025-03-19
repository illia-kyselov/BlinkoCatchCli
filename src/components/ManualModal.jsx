import React, { useState } from 'react';
import {
    Modal,
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    ImageBackground,
} from 'react-native';
import ArrowLeftSVG from '../assets/manual/ArrowLeftSVG';
import ArrowRightSVG from '../assets/manual/ArrowRightSVG';
import CancelSVG from '../assets/levels/CancelSVG';
import BallsLineSVG from '../assets/manual/BallsLineSVG';
import man from '../assets/manual/man.png';
import bgImage from '../assets/levels/image.png';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function ManualModal({ visible, onClose }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [touchStartX, setTouchStartX] = useState(null);

    const goNextPage = () => {
        if (currentPage < 3) {setCurrentPage(currentPage + 1);}
    };

    const goPrevPage = () => {
        if (currentPage > 1) {setCurrentPage(currentPage - 1);}
    };

    const handleClose = () => {
        onClose();
    };

    const handleTouchStart = (e) => {
        setTouchStartX(e.nativeEvent.pageX);
    };

    const handleTouchEnd = (e) => {
        if (touchStartX === null) {return;}
        const diff = e.nativeEvent.pageX - touchStartX;
        if (diff > 50) {
            goPrevPage();
        } else if (diff < -50) {
            goNextPage();
        }
        setTouchStartX(null);
    };

    const getManStyle = () => {
        if (currentPage === 1) {return styles.manImageLeft;}
        if (currentPage === 2) {return styles.manImageCenter;}
        return styles.manImageRight;
    };

    return (
        <Modal visible={visible} animationType="fade" transparent>
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <ImageBackground
                        source={bgImage}
                        style={styles.contentWrapper}
                        resizeMode="cover"
                        imageStyle={{ opacity: 0.13, transform: [{ scale: 3 }] }}
                    >
                        <View
                            style={{ flex: 1 }}
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                        >
                            <View style={styles.header}>
                                <Text style={styles.headerText}>Manual</Text>
                                {currentPage === 3 && (
                                    <TouchableOpacity style={styles.cancelButton} onPress={handleClose}>
                                        <CancelSVG />
                                    </TouchableOpacity>
                                )}
                            </View>

                            {currentPage === 1 && (
                                <View style={styles.pageContainer}>
                                    <View style={styles.pageRowRight}>
                                        <Text style={styles.pageNumber}>1</Text>
                                        <View style={[styles.purpleBlock, styles.purpleBlockRight]}>
                                            <Text style={styles.purpleText}>
                                                The ball rolls out of a hole in the screen
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={{ marginTop: 40 }} />

                                    <View style={styles.pageRowLeft}>
                                        <View style={[styles.purpleBlock, styles.purpleBlockLeft]}>
                                            <Text style={[styles.purpleText, { textAlign: 'right' }]}>
                                                The ball falls down, bouncing chaotically off a multitude of pins.
                                            </Text>
                                        </View>
                                        <Text style={styles.pageNumber}>2</Text>
                                    </View>

                                    <View style={[styles.arrowRow, { justifyContent: 'flex-end' }]}>
                                        <TouchableOpacity
                                            onPress={goNextPage}
                                            style={styles.arrowRight}
                                            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                                        >
                                            <ArrowRightSVG />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}

                            {currentPage === 2 && (
                                <View style={styles.pageContainer}>
                                    <View style={styles.pageRowRight}>
                                        <Text style={styles.pageNumber}>3</Text>
                                        <View style={[styles.purpleBlock, styles.purpleBlockRight]}>
                                            <Text style={styles.purpleText}>
                                                At the bottom of the screen you have a basket
                                                into which balls of a certain color must fall
                                            </Text>
                                            <View style={{ marginTop: 7 }}>
                                                <BallsLineSVG />
                                            </View>
                                        </View>
                                    </View>

                                    <View style={{ marginTop: 40 }} />

                                    <View style={styles.pageRowLeft}>
                                        <View style={[styles.purpleBlock, styles.purpleBlockLeft]}>
                                            <Text style={[styles.purpleText, { textAlign: 'right' }]}>
                                                This basket needs to be moved left or right
                                                to accurately collect certain balls.
                                            </Text>
                                        </View>
                                        <Text style={styles.pageNumber}>4</Text>
                                    </View>

                                    <View style={styles.arrowRow}>
                                        <TouchableOpacity
                                            onPress={goPrevPage}
                                            style={styles.arrowLeft}
                                            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                                        >
                                            <ArrowLeftSVG />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={goNextPage}
                                            style={styles.arrowRight}
                                            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                                        >
                                            <ArrowRightSVG />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}

                            {currentPage === 3 && (
                                <View style={styles.pageContainer}>
                                    <View style={styles.pageRowRight}>
                                        <Text style={styles.pageNumber}>5</Text>
                                        <View style={[styles.purpleBlock, styles.purpleBlockRight]}>
                                            <Text style={styles.purpleText}>
                                                If you miss a ball, one point will be deducted
                                                from the progress bar, and if you catch it, plus one point
                                            </Text>
                                            <View style={{ marginTop: 12 }} />
                                            <View style={styles.fakeProgressContainer}>
                                                <View style={styles.fakeProgressOuter}>
                                                    <View style={[styles.fakeProgressFill, { width: 21 }]} />
                                                    <Text style={styles.fakeProgressText}>0/5</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.arrowRow}>
                                        <TouchableOpacity
                                            onPress={goPrevPage}
                                            style={styles.arrowLeft}
                                            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                                        >
                                            <ArrowLeftSVG />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        </View>
                    </ImageBackground>

                    <Image source={man} style={getManStyle()} resizeMode="contain" />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
    },
    modalContainer: {
        alignSelf: 'center',
        width: SCREEN_WIDTH - 44,
        height: 748,
        borderRadius: 20,
        overflow: 'hidden',
        position: 'relative',
    },
    bgImage: {
        ...StyleSheet.absoluteFillObject,
        opacity: 0.07,
        borderRadius: 20,
    },
    contentWrapper: {
        flex: 1,
        borderRadius: 20,
        paddingTop: 16,
        paddingBottom: 16,
        backgroundColor: '#FFFFFF',
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginBottom: 20,
    },
    headerText: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 20,
        color: '#410563',
        textAlign: 'center',
        textShadowColor: 'rgba(0,0,0,0.25)',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 4,
    },
    cancelButton: {
        position: 'absolute',
        right: 0,
    },
    pageContainer: {
        flex: 1,
    },
    pageRowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 14,
    },
    pageRowLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 14,
    },
    pageNumber: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 20,
        color: '#000000',
        marginHorizontal: 8,
    },
    purpleBlock: {
        backgroundColor: '#410563',
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 19,
        flex: 1,
        maxWidth: 243,
    },
    purpleBlockRight: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    purpleBlockLeft: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    },
    purpleText: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 15,
        color: '#FFF9F9',
    },
    arrowRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 'auto',
        padding: 26,
    },
    arrowLeft: {
        alignSelf: 'flex-start',
        zIndex: 20,
    },
    arrowRight: {
        alignSelf: 'flex-end',
        zIndex: 20,
    },
    fakeProgressContainer: {
        marginTop: 12,
    },
    fakeProgressOuter: {
        position: 'relative',
        width: 125,
        height: 35,
        borderRadius: 15,
        borderWidth: 3,
        borderColor: '#9916B6',
        backgroundColor: 'transparent',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fakeProgressFill: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 38,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 42,
    },
    fakeProgressText: {
        position: 'absolute',
        width: '100%',
        textAlign: 'center',
        lineHeight: 35,
        fontFamily: 'Poppins',
        fontWeight: '900',
        fontSize: 15,
        color: '#FFFFFF',
    },
    manImageLeft: {
        position: 'absolute',
        bottom: -200,
        left: -80,
        width: 312,
        height: 546,
        resizeMode: 'contain',
    },
    manImageCenter: {
        position: 'absolute',
        bottom: -200,
        left: 36,
        width: 286,
        height: 546,
        resizeMode: 'contain',
    },
    manImageRight: {
        position: 'absolute',
        bottom: -200,
        right: -80,
        width: 312,
        height: 546,
        resizeMode: 'contain',
        zIndex: 1,
    },
});
