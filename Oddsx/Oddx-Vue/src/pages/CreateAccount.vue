<template>
  <section class="login_section pt-120 p3-bg">
    <div class="container-fluid">
      <div class="row justify-content-between align-items-center">
        <div class="col-6">
          <div class="login_section__thumb d-none d-lg-block">
            <img class="w-100" width="720" height="900" :src="createAccount" alt="Image" />
          </div>
        </div>
        <div class="col-lg-6 col-xl-5">
          <div class="login_section__loginarea">
            <div class="row justify-content-start">
              <div class="col-xxl-10">
                <div class="pb-10 pt-8 mb-7 mt-12 mt-lg-0 px-4 px-sm-10">
                  <h3 class="mb-6 mb-md-8">Create new account.</h3>
                  <p class="mb-10 mb-md-15">
                    Welcome! Create your account to get started on PRIMEBET.
                  </p>
                  <div class="login_section__form">
                    <form @submit="handleRegister">
                      <div class="mb-5 mb-md-6">
                        <input class="n11-bg" v-model="name" placeholder="Full Name" type="text" required />
                      </div>
                      <div class="mb-5 mb-md-6">
                        <input class="n11-bg" v-model="email" placeholder="Email" type="email" required />
                      </div>
                      <div class="mb-5 mb-md-6">
                        <input class="n11-bg" v-model="phone" placeholder="Phone Number" type="tel" required />
                      </div>
                      <!-- Country Dropdown -->
                      <div class="mb-5 mb-md-6">
                        <label for="country" class="form-label fw-semibold mb-2">Country</label>
                        <select id="country" v-model="country" class="n11-bg form-select py-3 px-3 border rounded shadow-sm" required>
                          <option value="">Select Country</option>
                          <option v-for="c in countries" :key="c.code" :value="c.name">
                            {{ c.name }}
                          </option>
                        </select>
                      </div>

                      <!-- Currency Dropdown -->
                      <div class="mb-5 mb-md-6">
                        <label for="currency" class="form-label fw-semibold mb-2">Preferred Currency</label>
                        <select id="currency" v-model="currency" class="n11-bg form-select py-3 px-3 border rounded shadow-sm" required>
                          <option value="">Select Currency</option>
                          <option v-for="c in currencies" :key="c.code" :value="c.code">
                            {{ c.name }} ({{ c.code }})
                          </option>
                        </select>
                      </div>

                      <div class="mb-5 mb-md-6">
                        <input class="n11-bg" v-model="password" placeholder="Password" type="password" required />
                      </div>
                      <div class="mb-5 mb-md-6">
                        <input class="n11-bg" v-model="confirmPassword" placeholder="Confirm Password" type="password" required />
                      </div>
                      <div class="d-flex align-items-center flex-wrap flex-sm-nowrap gap-2 mb-6">
                        <input type="checkbox" required />
                        <span>
                          I agree to all statements with
                          <router-link to="#">Terms of Use</router-link>
                        </span>
                      </div>
                      <button class="cmn-btn px-5 py-3 mb-6 w-100" type="submit">Sign Up Now</button>
                      <div v-if="error" class="text-danger">{{ error }}</div>
                    </form>
                  </div>
                  <div class="login_section__socialmedia text-center mb-6">
                    <span class="mb-6">Or continue with</span>
                    <div class="login_section__social d-center gap-3">
                      <router-link to="#" class="n11-bg px-3 py-2 rounded-5">
                        <IconBrandFacebookFilled :size="24" />
                      </router-link>
                      <router-link to="#" class="n11-bg px-3 py-2 rounded-5">
                        <IconBrandTwitterFilled :size="24" />
                      </router-link>
                      <router-link to="#" class="n11-bg px-3 py-2 rounded-5">
                        <IconBrandGoogle :size="24" />
                      </router-link>
                    </div>
                  </div>
                  <span class="d-center gap-1">
                    Already a member?
                    <router-link class="g1-color" to="/login">Login</router-link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import createAccount from "@/assets/images/create-acount.png"
import { IconBrandFacebookFilled, IconBrandGoogle, IconBrandTwitterFilled } from "@tabler/icons-vue"

const router = useRouter()

const name = ref('')
const email = ref('')
const phone = ref('')
const country = ref('')
const currency = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref('')

const countries = [
  { name: 'Afghanistan', code: 'AF' },
  { name: 'Albania', code: 'AL' },
  { name: 'Algeria', code: 'DZ' },
  { name: 'Andorra', code: 'AD' },
  { name: 'Angola', code: 'AO' },
  { name: 'Antigua and Barbuda', code: 'AG' },
  { name: 'Argentina', code: 'AR' },
  { name: 'Armenia', code: 'AM' },
  { name: 'Australia', code: 'AU' },
  { name: 'Austria', code: 'AT' },
  { name: 'Azerbaijan', code: 'AZ' },
  { name: 'Bahamas', code: 'BS' },
  { name: 'Bahrain', code: 'BH' },
  { name: 'Bangladesh', code: 'BD' },
  { name: 'Barbados', code: 'BB' },
  { name: 'Belarus', code: 'BY' },
  { name: 'Belgium', code: 'BE' },
  { name: 'Belize', code: 'BZ' },
  { name: 'Benin', code: 'BJ' },
  { name: 'Bhutan', code: 'BT' },
  { name: 'Bolivia', code: 'BO' },
  { name: 'Bosnia and Herzegovina', code: 'BA' },
  { name: 'Botswana', code: 'BW' },
  { name: 'Brazil', code: 'BR' },
  { name: 'Brunei', code: 'BN' },
  { name: 'Bulgaria', code: 'BG' },
  { name: 'Burkina Faso', code: 'BF' },
  { name: 'Burundi', code: 'BI' },
  { name: 'Cabo Verde', code: 'CV' },
  { name: 'Cambodia', code: 'KH' },
  { name: 'Cameroon', code: 'CM' },
  { name: 'Canada', code: 'CA' },
  { name: 'Central African Republic', code: 'CF' },
  { name: 'Chad', code: 'TD' },
  { name: 'Chile', code: 'CL' },
  { name: 'China', code: 'CN' },
  { name: 'Colombia', code: 'CO' },
  { name: 'Comoros', code: 'KM' },
  { name: 'Congo (Democratic Republic)', code: 'CD' },
  { name: 'Congo', code: 'CG' },
  { name: 'Costa Rica', code: 'CR' },
  { name: 'Croatia', code: 'HR' },
  { name: 'Cuba', code: 'CU' },
  { name: 'Cyprus', code: 'CY' },
  { name: 'Czechia', code: 'CZ' },
  { name: "Côte d'Ivoire", code: 'CI' },
  { name: 'Denmark', code: 'DK' },
  { name: 'Djibouti', code: 'DJ' },
  { name: 'Dominica', code: 'DM' },
  { name: 'Dominican Republic', code: 'DO' },
  { name: 'Ecuador', code: 'EC' },
  { name: 'Egypt', code: 'EG' },
  { name: 'El Salvador', code: 'SV' },
  { name: 'Equatorial Guinea', code: 'GQ' },
  { name: 'Eritrea', code: 'ER' },
  { name: 'Estonia', code: 'EE' },
  { name: 'Eswatini', code: 'SZ' },
  { name: 'Ethiopia', code: 'ET' },
  { name: 'Fiji', code: 'FJ' },
  { name: 'Finland', code: 'FI' },
  { name: 'France', code: 'FR' },
  { name: 'Gabon', code: 'GA' },
  { name: 'Gambia', code: 'GM' },
  { name: 'Georgia', code: 'GE' },
  { name: 'Germany', code: 'DE' },
  { name: 'Ghana', code: 'GH' },
  { name: 'Greece', code: 'GR' },
  { name: 'Grenada', code: 'GD' },
  { name: 'Guatemala', code: 'GT' },
  { name: 'Guinea', code: 'GN' },
  { name: 'Guinea-Bissau', code: 'GW' },
  { name: 'Guyana', code: 'GY' },
  { name: 'Haiti', code: 'HT' },
  { name: 'Honduras', code: 'HN' },
  { name: 'Hungary', code: 'HU' },
  { name: 'Iceland', code: 'IS' },
  { name: 'India', code: 'IN' },
  { name: 'Indonesia', code: 'ID' },
  { name: 'Iran', code: 'IR' },
  { name: 'Iraq', code: 'IQ' },
  { name: 'Ireland', code: 'IE' },
  { name: 'Israel', code: 'IL' },
  { name: 'Italy', code: 'IT' },
  { name: 'Jamaica', code: 'JM' },
  { name: 'Japan', code: 'JP' },
  { name: 'Jordan', code: 'JO' },
  { name: 'Kazakhstan', code: 'KZ' },
  { name: 'Kenya', code: 'KE' },
  { name: 'Kiribati', code: 'KI' },
  { name: 'Kuwait', code: 'KW' },
  { name: 'Kyrgyzstan', code: 'KG' },
  { name: 'Laos', code: 'LA' },
  { name: 'Latvia', code: 'LV' },
  { name: 'Lebanon', code: 'LB' },
  { name: 'Lesotho', code: 'LS' },
  { name: 'Liberia', code: 'LR' },
  { name: 'Libya', code: 'LY' },
  { name: 'Liechtenstein', code: 'LI' },
  { name: 'Lithuania', code: 'LT' },
  { name: 'Luxembourg', code: 'LU' },
  { name: 'Madagascar', code: 'MG' },
  { name: 'Malawi', code: 'MW' },
  { name: 'Malaysia', code: 'MY' },
  { name: 'Maldives', code: 'MV' },
  { name: 'Mali', code: 'ML' },
  { name: 'Malta', code: 'MT' },
  { name: 'Mexico', code: 'MX' },
  { name: 'Moldova', code: 'MD' },
  { name: 'Monaco', code: 'MC' },
  { name: 'Mongolia', code: 'MN' },
  { name: 'Montenegro', code: 'ME' },
  { name: 'Morocco', code: 'MA' },
  { name: 'Mozambique', code: 'MZ' },
  { name: 'Myanmar', code: 'MM' },
  { name: 'Namibia', code: 'NA' },
  { name: 'Nepal', code: 'NP' },
  { name: 'Netherlands', code: 'NL' },
  { name: 'New Zealand', code: 'NZ' },
  { name: 'Nicaragua', code: 'NI' },
  { name: 'Niger', code: 'NE' },
  { name: 'Nigeria', code: 'NG' },
  { name: 'North Korea', code: 'KP' },
  { name: 'Norway', code: 'NO' },
  { name: 'Oman', code: 'OM' },
  { name: 'Pakistan', code: 'PK' },
  { name: 'Palestine', code: 'PS' },
  { name: 'Panama', code: 'PA' },
  { name: 'Papua New Guinea', code: 'PG' },
  { name: 'Paraguay', code: 'PY' },
  { name: 'Peru', code: 'PE' },
  { name: 'Philippines', code: 'PH' },
  { name: 'Poland', code: 'PL' },
  { name: 'Portugal', code: 'PT' },
  { name: 'Qatar', code: 'QA' },
  { name: 'Romania', code: 'RO' },
  { name: 'Russia', code: 'RU' },
  { name: 'Rwanda', code: 'RW' },
  { name: 'Saudi Arabia', code: 'SA' },
  { name: 'Senegal', code: 'SN' },
  { name: 'Serbia', code: 'RS' },
  { name: 'Singapore', code: 'SG' },
]

const currencies = [
  { name: 'Afghan Afghani', code: 'AFN' },
  { name: 'Albanian Lek', code: 'ALL' },
  { name: 'Algerian Dinar', code: 'DZD' },
  { name: 'Angolan Kwanza', code: 'AOA' },
  { name: 'Argentine Peso', code: 'ARS' },
  { name: 'Armenian Dram', code: 'AMD' },
  { name: 'Australian Dollar', code: 'AUD' },
  { name: 'Azerbaijani Manat', code: 'AZN' },
  { name: 'Bahamian Dollar', code: 'BSD' },
  { name: 'Bahraini Dinar', code: 'BHD' },
  { name: 'Bangladeshi Taka', code: 'BDT' },
  { name: 'Barbadian Dollar', code: 'BBD' },
  { name: 'Belarusian Ruble', code: 'BYN' },
  { name: 'Belgian Euro', code: 'EUR' },
  { name: 'Belize Dollar', code: 'BZD' },
  { name: 'Bermudian Dollar', code: 'BMD' },
  { name: 'Bhutanese Ngultrum', code: 'BTN' },
  { name: 'Bolivian Boliviano', code: 'BOB' },
  { name: 'Bosnian Convertible Mark', code: 'BAM' },
  { name: 'Botswana Pula', code: 'BWP' },
  { name: 'Brazilian Real', code: 'BRL' },
  { name: 'British Pound', code: 'GBP' },
  { name: 'Brunei Dollar', code: 'BND' },
  { name: 'Bulgarian Lev', code: 'BGN' },
  { name: 'Burundian Franc', code: 'BIF' },
  { name: 'Cambodian Riel', code: 'KHR' },
  { name: 'Canadian Dollar', code: 'CAD' },
  { name: 'Cape Verdean Escudo', code: 'CVE' },
  { name: 'Central African CFA Franc', code: 'XAF' },
  { name: 'Chilean Peso', code: 'CLP' },
  { name: 'Chinese Yuan', code: 'CNY' },
  { name: 'Colombian Peso', code: 'COP' },
  { name: 'Comorian Franc', code: 'KMF' },
  { name: 'Congolese Franc', code: 'CDF' },
  { name: 'Costa Rican Colón', code: 'CRC' },
  { name: 'Croatian Kuna', code: 'HRK' },
  { name: 'Cuban Peso', code: 'CUP' },
  { name: 'Czech Koruna', code: 'CZK' },
  { name: "Côte d'Ivoire CFA Franc", code: 'XOF' },
  { name: 'Danish Krone', code: 'DKK' },
  { name: 'Djiboutian Franc', code: 'DJF' },
  { name: 'Dominican Peso', code: 'DOP' },
  { name: 'East Caribbean Dollar', code: 'XCD' },
  { name: 'Egyptian Pound', code: 'EGP' },
  { name: 'Eritrean Nakfa', code: 'ERN' },
  { name: 'Estonian Euro', code: 'EUR' },
  { name: 'Ethiopian Birr', code: 'ETB' },
  { name: 'Euro', code: 'EUR' },
  { name: 'Fijian Dollar', code: 'FJD' },
  { name: 'Gambian Dalasi', code: 'GMD' },
  { name: 'Georgian Lari', code: 'GEL' },
  { name: 'Ghanaian Cedi', code: 'GHS' },
  { name: 'Guatemalan Quetzal', code: 'GTQ' },
  { name: 'Guinean Franc', code: 'GNF' },
  { name: 'Haitian Gourde', code: 'HTG' },
  { name: 'Honduran Lempira', code: 'HNL' },
  { name: 'Hong Kong Dollar', code: 'HKD' },
  { name: 'Hungarian Forint', code: 'HUF' },
  { name: 'Icelandic Krona', code: 'ISK' },
  { name: 'Indian Rupee', code: 'INR' },
  { name: 'Indonesian Rupiah', code: 'IDR' },
  { name: 'Iranian Rial', code: 'IRR' },
  { name: 'Iraqi Dinar', code: 'IQD' },
  { name: 'Israeli New Shekel', code: 'ILS' },
  { name: 'Jamaican Dollar', code: 'JMD' },
  { name: 'Japanese Yen', code: 'JPY' },
  { name: 'Jordanian Dinar', code: 'JOD' },
  { name: 'Kazakhstani Tenge', code: 'KZT' },
  { name: 'Kenyan Shilling', code: 'KES' },
  { name: 'Kuwaiti Dinar', code: 'KWD' },
  { name: 'Kyrgyzstani Som', code: 'KGS' },
  { name: 'Lao Kip', code: 'LAK' },
  { name: 'Latvian Euro', code: 'EUR' },
  { name: 'Lebanese Pound', code: 'LBP' },
  { name: 'Lesotho Loti', code: 'LSL' },
  { name: 'Liberian Dollar', code: 'LRD' },
  { name: 'Libyan Dinar', code: 'LYD' },
  { name: 'Lithuanian Euro', code: 'EUR' },
  { name: 'Macanese Pataca', code: 'MOP' },
  { name: 'Malagasy Ariary', code: 'MGA' },
  { name: 'Malawian Kwacha', code: 'MWK' },
  { name: 'Malaysian Ringgit', code: 'MYR' },
  { name: 'Maldivian Rufiyaa', code: 'MVR' },
  { name: 'Malian CFA Franc', code: 'XOF' },
  { name: 'Mauritian Rupee', code: 'MUR' },
  { name: 'Mexican Peso', code: 'MXN' },
  { name: 'Moldovan Leu', code: 'MDL' },
  { name: 'Mongolian Tugrik', code: 'MNT' },
  { name: 'Moroccan Dirham', code: 'MAD' },
  { name: 'Mozambican Metical', code: 'MZN' },
  { name: 'Myanmar Kyat', code: 'MMK' },
  { name: 'Namibian Dollar', code: 'NAD' },
  { name: 'Nepalese Rupee', code: 'NPR' },
  { name: 'Netherlands Antillean Guilder', code: 'ANG' },
  { name: 'New Zealand Dollar', code: 'NZD' },
  { name: 'Nigerian Naira', code: 'NGN' },
  { name: 'North Korean Won', code: 'KPW' },
  { name: 'Norwegian Krone', code: 'NOK' },
  { name: 'Omani Rial', code: 'OMR' },
  { name: 'Pakistani Rupee', code: 'PKR' },
  { name: 'Panamanian Balboa', code: 'PAB' },
  { name: 'Papua New Guinean Kina', code: 'PGK' },
  { name: 'Paraguayan Guarani', code: 'PYG' },
  { name: 'Peruvian Sol', code: 'PEN' },
  { name: 'Philippine Peso', code: 'PHP' },
];


const handleRegister = async (e: Event) => {
  e.preventDefault()
  if (password.value !== confirmPassword.value) {
    error.value = 'Passwords do not match.'
    return
  }

  try {
    await axios.post('http://localhost:5000/api/register', {
      name: name.value,
      email: email.value,
      phone: phone.value,
      country: country.value,
      currency: currency.value,
      password: password.value
    })

    router.push('/dashboard')
  } catch (err: any) {
    error.value = err.response?.data?.message || 'Registration failed'
  }
}
</script>

<style scoped>
.text-danger {
  color: red;
  text-align: center;
  margin-top: 10px;
}
/* Enhancing dropdown usability */
select.form-select {
  max-height: 70px;
  overflow-y: auto;
  background-color: #fff;
}

label.form-label {
  font-size: 1rem;
  color: #bdb8b8;
}

select.form-select:focus {
  border-color: #6c63ff;
  outline: none;
  box-shadow: 0 0 0 0.2rem rgba(108, 99, 255, 0.25);
}

</style>
