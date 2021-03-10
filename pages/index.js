import Head from "next/head";

import Container from "../components/container";
import Layout from "../components/layout";
import {Canvas} from "../components/canvas";

export default function Index() {
    return (
        <div className='overflow-y-hidden'>
            <Layout>
                <Head/>
                <Container>
                    <motion.div
                        className='h-screen relative'
                        layoutId='bg-black'
                    >
                        <Canvas
                            className='m-auto w-screen absolute top-0 left-0 right-0'
                        />
                        <div
                            className='flex flex-col items-center justify-center py-16 absolute top-0 left-0 right-0 bottom-0'>
                            <div className='flex flex-col items-center justify-center'>
                                <motion.h1
                                    className='text-6xl lg:text-8xl text-center text-white'
                                    layoutId='layoutId'
                                >
                                    TYPH.US
                                </motion.h1>
                            </div>
                        </div>

                    </motion.div>
                </Container>
            </Layout>
        </div>
    )
}
