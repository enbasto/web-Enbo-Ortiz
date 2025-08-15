import Image from "next/image";
function Loading() {
    return (
        <>
            <div className="relative flex justify-center items-center">
                <div className="absolute animate-spin rounded-full h-52 w-52 border-t-4 border-b-4 border-logo"></div>
                <Image src="/img/LOG-MMW.svg" className="rounded-full h-40 w-40" alt="Logo"
                    width={40}
                    height={40} />
            </div>
        </>
    );
}

export default Loading;