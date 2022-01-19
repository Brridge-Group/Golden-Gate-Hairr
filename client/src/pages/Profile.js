// Custom Imports
import { withContext } from '../contexts/AppContext'
import '../stylesheets/Profile.css'
const Profile = props => {
  // const { currentUser } = props
  console.log('in profile user', props, props.user)

  return (
    <>
      <section className='profile'>
        <div className='profile-header' style={{ textTransform: 'var(--capitalize)' }}>
          <h1>{props.user.role} Profile</h1>
          {/* <h2>hi {props.user.firstName}!</h2> */}
        </div>
        <div className='row'>
          <div className='col-md-9'>
            <div className='card-body'>
              <div className='tab-content'>
                <div className='tab-pane active' id='Profile Details'>
                  <form className='form-horizontal'>
                    <div className='form-group row'>
                      <label htmlFor='inputName' className='col-sm-2 col-form-label' style={{ textTransform: 'var(--capitalize)' }}>
                        First Name:
                      </label>
                      <div className='col-sm-10'>
                        <input type='email' className='form-control' id='inputName' defaultValue={props.user.firstName} />
                      </div>
                    </div>
                    <div className='form-group row'>
                      <label htmlFor='inputName2' className='col-sm-2 col-form-label' style={{ textTransform: 'var(--capitalize)' }}>
                        Last Name:
                      </label>
                      <div className='col-sm-10'>
                        <input type='text' className='form-control' id='inputName2' defaultValue={props.user.lastName} />
                      </div>
                    </div>
                    <div className='form-group row'>
                      <label htmlFor='inputEmail' className='col-sm-2 col-form-label' style={{ textTransform: 'var(--capitalize)' }}>
                        Email:
                      </label>
                      <div className='col-sm-10'>
                        <input type='email' className='form-control' id='inputEmail' defaultValue={props.user.email} />
                        {/* <input type='email' className='form-control' id='inputEmail' placeholder={props.user.email} /> */}
                      </div>
                    </div>
                    <div className='form-group row'>
                      <label htmlFor='inputExperience' className='col-sm-2 col-form-label' style={{ textTransform: 'var(--capitalize)' }}>
                        Review Ids:
                      </label>
                      <div className='col-sm-10'>
                        <textarea className='form-control' id='inputExperience' defaultValue={props.user.reviews}></textarea>
                      </div>
                    </div>
                    {/* <div className='form-group row'>
                      <label htmlFor='inputSkills' className='col-sm-2 col-form-label'>
                        Skills
                      </label>
                      <div className='col-sm-10'>
                        <input type='text' className='form-control' id='inputSkills' placeholder='Skills' />
                      </div>
                    </div> */}
                    {/* <div className='form-group row'>
                      <div className='offset-sm-2 col-sm-10'>
                        <div className='checkbox'>
                          <label>
                            <input type='checkbox' defaultChecked={props.user.isOwner} /> Business Owner
                          </label>
                        </div>
                      </div>
                    </div> */}
                    <div className='form-group row'>
                      <div className='offset-sm-2 col-sm-10'>
                        <button type='submit' className='btn btn-danger'>
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card card-primary' id='card-outline'>
              <div className='card-body box-profile'>
                <div className='text-center'>
                  <img className='profile-user-img img-fluid img-circle' src='/assets/dist/img/user2-160x160.jpg' alt='User profile picture' />
                </div>

                <h3 className='profile-username text-center' style={{ textTransform: 'var(--capitalize)' }}>
                  {props.user.firstName} {props.user.lastName}
                </h3>

                <p className='text-muted text-center' style={{ textTransform: 'var(--capitalize)' }}>
                  {props.user.role}
                </p>

                <ul className='list-group list-group-unbordered mb-3'>
                  <li className='list-group-item'>
                    <b>Reviews</b> <a className='float-right'>{props.user.reviews?.length}</a>
                  </li>
                  {/* <li className='list-group-item'>
                    <b>Following</b> <a className='float-right'>543</a>
                  </li>
                  <li className='list-group-item'>
                    <b>Friends</b> <a className='float-right'>13,287</a>
                  </li> */}
                </ul>

                <a href='#' className='btn btn-primary btn-block' style={{ textTransform: 'var(--capitalize)' }}>
                  <b>Follow</b>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default withContext(Profile)
