import React, {useEffect, useRef} from 'react';
import '../css/index.css';
import Tracks from "./Tracks";
import TrackUploader from "./TrackUploader";
import {ON_CHANGE_WINDOW_SIZE} from "./consts";
import {connect} from "react-redux";

const TrackScheduler = ()=>{

    return(
        <main role="main">
            <section>
                <TrackUploader />
                <table>
                    <caption>Расписание</caption>
                    <thead>
                    <tr>
                        <th>Название</th>
                        <th> </th>
                        <th><span>00</span>:00</th>
                        <th><span>01</span>:00</th>
                        <th><span>02</span>:00</th>
                        <th><span>03</span>:00</th>
                        <th><span>04</span>:00</th>
                        <th><span>05</span>:00</th>
                        <th><span>06</span>:00</th>
                        <th><span>07</span>:00</th>
                        <th><span>08</span>:00</th>
                        <th><span>09</span>:00</th>
                        <th><span>10</span>:00</th>
                        <th><span>11</span>:00</th>
                        <th><span>12</span>:00</th>
                        <th><span>13</span>:00</th>
                        <th><span>14</span>:00</th>
                        <th><span>15</span>:00</th>
                        <th><span>16</span>:00</th>
                        <th><span>17</span>:00</th>
                        <th><span>18</span>:00</th>
                        <th><span>19</span>:00</th>
                        <th><span>20</span>:00</th>
                        <th><span>21</span>:00</th>
                        <th><span>22</span>:00</th>
                        <th><span>23</span>:00</th>
                        <th> </th>
                    </tr>
                    </thead>
                    <tbody>
                        <Tracks />
                    </tbody>
                </table>

            </section>
           {/* <OutInfoLayer tracks={ tracks }/>*/}
        </main>
    )
};

export default TrackScheduler;