
import React, { useEffect } from "react";
import { ScrollFollow, LazyLog } from "react-lazylog";
import clsx from 'clsx';

export default function Log(props) {
    const {className} = props;
    //const url = 'https://runkit.io/eliperelman/streaming-endpoint/branches/master';
    const text = 'text';
    return (
        <div
            className={className}
            style={{ minHeight: "10em"}}>
            <ScrollFollow
                startFollowing
                render={({ onScroll, follow, startFollowing, stopFollowing }) => (
                    <LazyLog extraLines={1} enableSearch text={text} stream onScroll={onScroll} follow={follow} />
                )}
            />
        </div>
    );
}