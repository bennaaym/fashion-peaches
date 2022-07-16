import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons/';
import { Formik } from 'formik';
import { appTheme } from '../../common/styles/theme';
import { PrimaryButton, SocialMediaButton } from '../../components/buttons';
import * as yup from 'yup';
import SignUp from './SignUp';

const Auth = ({ route, navigation }) => {
  // const { userType } = route.params;
  console.log(route);
  const isSignUp = route.name === 'SignUp';

  const validationSchema = isSignUp
    ? yup.object().shape({
        username: yup
          .string()
          .required('Username is required')
          .min(3, ({ min }) => `Username must be at least ${min} characters`),

        phone: yup
          .string()
          .required('Phone  is required')
          .min(
            8,
            ({ min }) => `Phone number must be at least ${min} characters`
          ),

        password: yup
          .string()
          .required('Password is required')
          .min(8, ({ min }) => `Password must be at least ${min} characters`),

        confirmPassword: yup
          .string()
          .required('Confirm password is required')
          .oneOf([yup.ref('password')], 'Passwords must match'),
      })
    : yup.object().shape({
        username: yup
          .string()
          .required('Password is required')
          .min(3, ({ min }) => `Username must be at least ${min} characters`),

        password: yup
          .string()
          .required()
          .min(8, ({ min }) => `Password must be at least ${min} characters`),
      });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isSignUp ? 'Create account' : 'Log in'}</Text>
      <View style={styles.socialMedia}>
        <SocialMediaButton
          label="Facebook"
          icon={
            <AntDesign
              name="facebook-square"
              size={28}
              color={appTheme.colors.white}
            />
          }
          labelStyle={{ color: appTheme.colors.white }}
        />
        <SocialMediaButton
          label="Gmail"
          icon={
            <AntDesign name="google" size={24} color={appTheme.colors.red} />
          }
          labelStyle={{
            color: appTheme.colors.black,
          }}
          style={{
            backgroundColor: appTheme.colors.white,
            marginLeft: 10,
          }}
        />
      </View>
      <Text style={styles.text}>or sign up with email</Text>
      <View style={styles.formContainer}>
        <Formik
          initialValues={
            isSignUp
              ? {
                  username: '',
                  phone: '',
                  password: '',
                  confirmPassword: '',
                }
              : { username: '', password: '' }
          }
          validationSchema={validationSchema}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <View>
              <TextInput
                style={styles.textInput}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                activeUnderlineColor={appTheme.colors.transparent}
                underlineColor={appTheme.colors.transparent}
                value={values.username}
                placeholder="Username"
              />
              {errors.username && (
                <Text style={styles.inputError}>{errors.username}</Text>
              )}
              {isSignUp && (
                <TextInput
                  style={styles.textInput}
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  activeUnderlineColor={appTheme.colors.transparent}
                  underlineColor={appTheme.colors.transparent}
                  value={values.phone}
                  placeholder="Phone Number"
                />
              )}
              {errors.phone && (
                <Text style={styles.inputError}>{errors.phone}</Text>
              )}

              <TextInput
                style={styles.textInput}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                activeUnderlineColor={appTheme.colors.transparent}
                underlineColor={appTheme.colors.transparent}
                value={values.password}
                secureTextEntry={true}
                placeholder="Password"
              />
              {errors.password && (
                <Text style={styles.inputError}>{errors.password}</Text>
              )}
              {!isSignUp && (
                <TouchableOpacity>
                  <Text style={[styles.bottomText, { textAlign: 'right' }]}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              )}
              {isSignUp && (
                <TextInput
                  style={styles.textInput}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  activeUnderlineColor={appTheme.colors.transparent}
                  underlineColor={appTheme.colors.transparent}
                  secureTextEntry={true}
                  value={values.confirmPassword}
                  placeholder="Confirm Password"
                />
              )}
              {errors.confirmPassword && (
                <Text style={styles.inputError}>{errors.confirmPassword}</Text>
              )}
              <PrimaryButton
                label={isSignUp ? 'Sign up' : 'Sign in'}
                style={{ width: '100%', marginVertical: 10 }}
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
      </View>
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>Already have an account?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(isSignUp ? 'SignIn' : 'SignUp')}
        >
          <Text style={[styles.bottomText, { color: appTheme.colors.cyan }]}>
            {isSignUp ? 'Log in' : 'Sign up'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appTheme.colors.black,
    paddingHorizontal: 20,
  },
  title: {
    ...appTheme.fonts.h1,
    fontFamily: 'Montserrat_800ExtraBold',
    color: appTheme.colors.white,
  },

  socialMedia: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginVertical: 30,
  },

  text: {
    ...appTheme.fonts.caption1,
    fontFamily: 'Montserrat_400Regular',
    color: appTheme.colors.white,
    opacity: 0.6,
    marginVertical: 5,
  },

  formContainer: {
    width: '100%',
  },

  textInput: {
    backgroundColor: appTheme.colors.white,
    paddingHorizontal: 10,
    height: 50,
    borderBottomColor: 0,
    marginVertical: 10,
    borderRadius: 10,
    fontFamily: 'Montserrat_400Regular',
  },

  inputError: {
    color: appTheme.colors.red,
  },

  bottomTextContainer: {
    display: 'flex',
    flexDirection: 'row',
  },

  bottomText: {
    color: appTheme.colors.white,
    marginHorizontal: 5,
    marginTop: 20,
    ...appTheme.fonts.body3,
  },
});

export default Auth;
