import React from 'react';
import '../css/index.css';

const TrackScheduler = ()=>{
    return(
        <main role="main">
            <section>
                <button>Добавить трек</button>
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
                        <th><span>00</span>:00</th>
                        <th> </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Track I</td>
                        <td colSpan="27">
                            <div className="track_wraper">
                                <div className="leftArrow"> </div>
                                <div className="track_body">
                                    <div className="in_info">02:12 - 03:14 ( 2ч 22мин )</div>
                                </div>
                                <div className="rightArrow"> </div>
                                <div className="out_info">02:12 - 03:14 ( 2ч 22мин )</div>
                            </div>


                        </td>
                    </tr>
                    <tr>
                        <td>Track II</td>
                        <td colSpan="27">
                            <div className="track_wraper">
                                <div className="leftArrow"> </div>
                                <div className="track_body">
                                    <div className="in_info">02:12 - 03:14 ( 2ч 22мин )</div>
                                </div>
                                <div className="rightArrow"> </div>
                                <div className="out_info">02:12 - 03:14 ( 2ч 22мин )</div>
                            </div>

                        </td>
                    </tr>

                    </tbody>
                </table>
            </section>
        </main>
    )
};

export default TrackScheduler;